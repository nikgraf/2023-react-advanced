// import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useRef } from "react";

type Props = {
  defaultPosition: [number, number];
  zoom?: number;
};

const Map: React.FC<Props> = ({ zoom = 13, defaultPosition }) => {
  const element = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={element}
      style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
    />
  );
};

export default Map;
