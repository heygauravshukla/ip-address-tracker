"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export default function Map({ center = [51.505, -0.09], zoom = 13 }) {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView(center, zoom);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker with a custom icon
    const customIcon = L.icon({
      iconUrl: "/images/icons/icon-location.svg",
      iconSize: [46, 56],
      iconAnchor: [12, 41],
    });

    L.marker(center, { icon: customIcon }).addTo(map);

    return () => map.remove(); // Clean up on unmount
  }, [center, zoom]);

  return <div id="map" className="z-10 h-96 w-full"></div>;
}
