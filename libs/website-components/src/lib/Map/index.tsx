import { FC } from "react";
import cls from "classnames";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export type IMap = {
  position?: [number, number];
  width: string;
  height: string;
  zoom: number;
};

export const Map: FC<IMap> = ({
  width = "300px",
  height = "300px",
  position = [51.505, -0.09],
  zoom = 13,
}) => {
  return (
    <div
      style={{ width, height }}
      className={cls(
        "rounded-lg",
        "shadow",
        "shadow-gray-600/10",
        "rounded-lg",
        "overflow-hidden",
        "shadow",
        "shadow-gray-600/30"
      )}
    >
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
