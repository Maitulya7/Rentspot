/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="image" />
          <div className="textConatiner">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="bed">
                {item.bedroom} Bedroom
            </span>
            <b>${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
