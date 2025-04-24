"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function CustomMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // estilo minimalista
      center: [-71.500876, -32.901379], // Hotel Mantagua Village
      zoom: 15,
      attributionControl: false,
    });

    // Agrega control de navegación
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    // Agrega marcador personalizado
    const el = document.createElement("div");
    el.className = "marker";
    el.style.width = "32px";
    el.style.height = "32px";
    el.style.backgroundImage = "url('/img/marker-heart.avif')";
    el.style.backgroundSize = "cover";
    el.style.borderRadius = "50%";

    new maplibregl.Marker(el)
      .setLngLat([-71.500876, -32.901379])
      .addTo(map.current);
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[380px] rounded-xl overflow-hidden shadow-md"
    />
  );
}