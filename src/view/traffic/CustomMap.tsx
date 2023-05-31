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

interface IMapProps {
  map: {
    name: string;
    address: string;
    website: string;
    googleMap: string;
    position: string;
  }[];
  center?: {
    lat: number;
    lng: number;
  };
}
const CustomMap = (props: IMapProps) => {
  const {
    map,
    center = {
      lat: 25.1370301,
      lng: 121.5146454,
    },
  } = props;
  const [activeInfoWindow, setActiveInfoWindow] = useState<number | string>("");
  const [markers, setMarkers] = useState(initialMarkers);
  const [zoomRange, setZoomRange] = useState<number | undefined>(15);

  const containerStyle = {
    width: "100%",
    height: "32rem",
  };

  // const center = {
  //   lat: 25.1370301,
  //   lng: 121.5146454,
  // };

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
    <div className="w-full">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_P as string}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onClick={mapClicked}
          onZoomChanged={() => {
            // setZoomRange(undefined);
          }}
        >
          {map.map((marker, index) => (
            <Marker
              key={index}
              position={{
                lat: +marker.position.split(",")[0],
                lng: +marker.position.split(",")[1],
              }}
              // label={marker.name}
              // draggable={marker.draggable}
              onDragEnd={(event) => markerDragEnd(event, index)}
              onClick={(event) => markerClicked(marker, index)}
            >
              {+activeInfoWindow === +index && (
                <InfoWindow
                  zIndex={20}
                  position={{
                    lat: +marker.position.split(",")[0],
                    lng: +marker.position.split(",")[1],
                  }}
                >
                  <div className="mb-1 flex flex-col px-0 py-0">
                    <b className="mb-1 text-sm text-gray-900">{marker.name}</b>
                    <b className="mb-1 text-sm text-gray-900">
                      {marker.address}
                    </b>

                    <a
                      href={marker.googleMap}
                      target="__blank"
                      className="mb-2 font-normal text-blue-500 hover:underline"
                    >
                      在 Google 地圖上查看
                    </a>

                    <a
                      href={marker.website}
                      target="__blank"
                      className="font-normal text-blue-500 hover:underline"
                    >
                      查看網站
                    </a>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default CustomMap;
