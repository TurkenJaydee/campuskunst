import React from 'react';

export default function SimpleMap({ lat, lon }) {
  // 1. Die übergebenen Werte zwingend in echte Kommazahlen umwandeln
  const numericLat = parseFloat(lat);
  const numericLon = parseFloat(lon);

  // 2. Sicherheitscheck: Wenn die Werte fehlen oder ungültig sind, Text anzeigen statt Absturz
  if (isNaN(numericLat) || isNaN(numericLon)) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
        <em>Für diesen Eintrag sind leider keine gültigen Koordinaten verfügbar.</em>
      </div>
    );
  }

  // 3. Einen kleinen Offset berechnen, um den Kartenausschnitt (Zoom) festzulegen
  // 0.005 Grad entsprechen grob 500 Metern in alle Richtungen
  const offset = 0.0005;
  
  // 4. Die Bounding Box für OSM: min-Lon, min-Lat, max-Lon, max-Lat
  const bbox = `${numericLon - offset},${numericLat - offset},${numericLon + offset},${numericLat + offset}`;
  
  // 5. Die URL für den iFrame zusammenbauen
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${numericLat},${numericLon}`;

  return (
    <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapUrl}
        style={{ border: '1px solid #ccc', borderRadius: '4px' }}
        title="OpenStreetMap Standort"
      />
      <div style={{ textAlign: 'right', marginTop: '5px' }}>
        <small>
          <a 
            href={`https://www.openstreetmap.org/?mlat=${numericLat}&mlon=${numericLon}#map=16/${numericLat}/${numericLon}`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0078A8', textDecoration: 'none' }}
          >
            Größere Karte anzeigen
          </a>
        </small>
      </div>
    </div>
  );
}