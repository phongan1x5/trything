import React from "react";
import clsx from 'clsx';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
import { GOOGLE_MAP_API_KEY } from "config/constants";

// @material-ui/core components
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Map from "@material-ui/icons/Map";
import AddLocation from "@material-ui/icons/AddLocation";
import Search from "@material-ui/icons/Search";
import Place from "@material-ui/icons/Place";
import List from "@material-ui/icons/List";
import Drawer from '@material-ui/core/Drawer';
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";
import pinMaker from 'assets/icons/pinMaker.svg';
import { Link } from "react-router-dom";

import VehicleSideBar from "./VehicleSideBar";

const useStyles = makeStyles(styles);

import Loading from "components/Loading/Loading";
import { connect } from 'react-redux';
import { loadVehicles } from 'reducers/vehicle';
import { IRootState } from 'reducers';

// defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={ props.center }
      defaultOptions={{
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false
      }}

    >
      {props.data.map((maker, index) => {
        if (maker.status === 'connected') {
          return (
            <Marker position={{ lat: maker.latitude, lng: maker.longitude }} 
              icon={{
                url: pinMaker,
                anchor: new google.maps.Point(5, 58), 
              }}
              onClick={(marker) => { 
                console.log(`click on Marker ${marker.latLng.lat()} - ${marker.latLng.lng()}`, marker) 
              }}
            >
              <InfoWindow>
                <div className="infowindow">
                  <div className="path">{ maker.formatted_address }</div>
                  <div className="device-name mb-2">{ maker.serialnumber }</div>
                  <div><Link to={'/user/overview/assets'} className="assets">Assets</Link></div>  
                </div>
              </InfoWindow>
            </Marker>
          )
        }}
        )
      }
    </GoogleMap>
  ))
);

export function Overview(props) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();

  React.useEffect(() => {
    // setInterval( fetchVehicles , 10000);
    async function fetchVehicles() {
      await props.loadVehicles();
    }
    fetchVehicles();
  }, [1]);


  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <VehicleSideBar />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openDrawer,
        })}
      >
        <div style={{ position: 'relative'}}>
          <RegularMap
            googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}` }
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="containerElementMap" />}
            mapElement={<div style={{ height: `100%` }} />}
            isMarkerShown
            data={ props.vehicles }
            center={ {lat: 40.748817, lng: -73.985428} }
          />
          <div className={ classes.searchMapContainer}>
            <Button
                aria-label="edit"
                justIcon
                round
                className={classes.toogleDrawer}
                onClick={ e => {setOpenDrawer(!openDrawer)} }
              >
                <List />
            </Button>
            <CustomInput
              formControlProps={{
                className: classes.btnSearchOnMap
              }}
              inputProps={{
                id : "btn-search-on-map",
                placeholder: "Search",
                startAdornment: (
                  <InputAdornment position="start">
                    <Search className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
                onChange: event => {
                  setUsername(event.target.value);
                },
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default connect(
  ({ authentication, vehicle }: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles
  }),
  {
    loadVehicles
  }
)(Overview);
