import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";

const initialMarkers = [
  {
    position: {
      lat: 25.1370301,
      lng: 121.5146454,
    },
    label: { backgroundColor: "#ee2400", color: "white", text: "L" },
    draggable: false,
  },
];

const CustomMap = () => {
  const [activeInfoWindow, setActiveInfoWindow] = useState<number | string>("");
  const [markers, setMarkers] = useState(initialMarkers);
  const [zoomRange, setZoomRange] = useState<number | undefined>(15);

  const containerStyle = {
    width: "100%",
    height: "20rem",
  };

  const center = {
    lat: 25.1370301,
    lng: 121.5146454,
  };

  const mapClicked = (event: any) => {
    console.log(event.latLng.lat(), event.latLng.lng());
  };

  const markerClicked = (marker: any, index: number) => {
    setActiveInfoWindow(index);
    // console.log(marker, index);
    // setZoomRange((curZoom) => curZoom + 1);
  };

  const markerDragEnd = (event: any, index: number) => {
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
  };

  return (
    <div className="">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_P as string}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onClick={mapClicked}
          onZoomChanged={() => {
            // setZoomRange(undefined);
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              label={marker.label}
              draggable={marker.draggable}
              onDragEnd={(event) => markerDragEnd(event, index)}
              onClick={(event) => markerClicked(marker, index)}
            >
              {/* {+activeInfoWindow === +index && (
                <InfoWindow position={marker.position}>
                  <b>
                    {marker.position.lat}, {marker.position.lng}
                  </b>
                </InfoWindow>
              )} */}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default CustomMap;
