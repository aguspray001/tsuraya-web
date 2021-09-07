import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const Map = () => {
  const position = [51.505, -0.09];
  return (
    <div className="min-h-8">
      <MapContainer style={{ height: "100%", width: "100%" }} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
