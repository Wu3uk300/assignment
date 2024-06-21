"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  lat: any;
  lon: any;
}

const Map: React.FC<MapProps> = ({ lat, lon }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyDjiCly2LpnEBgKmAC2uINCozLKmIEJSmo",
        version: "weekly",
      });

      const google = await loader.load();
      const position = {
        lat: parseFloat(lat),
        lng: parseFloat(lon),
      };
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 10,
        mapId: "myMapNext",
      };
      const map = new google.maps.Map(
        mapRef.current as HTMLElement,
        mapOptions
      );
      new google.maps.Marker({
        position: position,
        map: map,
      });
    };

    initMap();
  }, []);

  return (
    <div
      style={{
        height: "400px",
        width: "1000px",
        margin: "auto",
        marginTop: "20px",
      }}
      ref={mapRef}
    ></div>
  );
};

export default Map;
