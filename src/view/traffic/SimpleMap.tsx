import React from "react";
import GoogleMapReact from "google-map-react";
import MapIcon from "@/component/icon/Map";

const AnyReactComponent = ({ text }: any) => (
  <div
    style={{
      border: "1px solid white",
      borderRadius: "50%",
      //   height: 20,
      //   width: 20,
      color: true ? "red" : "blue",
      cursor: "pointer",
      zIndex: 10,
    }}
  >
    <MapIcon className="mx-2 h-10 w-10" />
  </div>
);

// lat: 25.137057792397165,
// lng: 121.51471492106172,
export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 25.137057792397165,
      lng: 121.51451492106172,
    },
    zoom: 14,
  };

  // navigator.geolocation.getCurrentPosition((position) => {
  //   console.log(position.coords.latitude, position.coords.longitude);
  // })

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "40vh", width: "800px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_P as string,
        }}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
        layerTypes={["TrafficLayer"]}
        options={function (maps) {
          return {
            panControl: true,
            mapTypeControl: true,
            scrollwheel: true,
            styles: [
              {
                stylers: [
                  { saturation: -100 },
                  { gamma: 0.8 },
                  { lightness: 4 },
                  { visibility: "on" },
                ],
              },
            ],
          };
        }}
      >
        <AnyReactComponent
          lat={25.137454}
          lng={121.51494}
          //   text={<MapIcon className="mx-2 h-4 w-4" />}
          text={"test"}
        />
      </GoogleMapReact>
    </div>
  );
}
