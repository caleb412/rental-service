import { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

type MapProps = {
  city: City;
  points: Array<{
    id: string;
    latitude: number;
    longitude: number;
  }>;
  selectedPointId?: string | null;
  height?: string;
};

const createIcon = (isActive: boolean = false) => {
  const iconUrl = isActive ? "/img/pin-active.svg" : "/img/pin.svg";

  return L.icon({
    iconUrl: iconUrl,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
  });
};

function Map({ city, points, selectedPointId, height = "100%" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const { latitude, longitude, zoom } = city.location;

    const map = L.map(mapRef.current).setView([latitude, longitude], zoom);
    mapInstanceRef.current = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [city]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    points.forEach((point) => {
      const isActive = point.id === selectedPointId;
      const icon = createIcon(isActive);

      const marker = L.marker([point.latitude, point.longitude], {
        icon,
      }).addTo(map);

      markersRef.current.push(marker);
    });
  });

  return <div ref={mapRef} className="cities__map map" style={{ height }} />;
}

export { Map };
