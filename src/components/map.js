import React, { useRef, useEffect } from 'react';


const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom
    });
    let infowindow = new window.google.maps.InfoWindow({
        content: `<div className="info"><h2>Loremipsum Marketing</h2></div>`
    })
    let marker = new window.google.maps.Marker({ title: 'location', position: center, map: map });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}, [center, zoom]);  

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;