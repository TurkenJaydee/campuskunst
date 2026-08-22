import React, { useState, useEffect } from 'react';

export default function SimpleMap({ lat, lon }) {
  // State für die Verzögerung
  const [loadSrc, setLoadSrc] = useState(false);

  // Timer: Baut das Fenster auf und lädt nach 500ms (0.5 Sekunden) den Inhalt
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSrc(true);
    }, 500);
    
    // Aufräumen, falls die Komponente schnell wieder geschlossen wird
    return () => clearTimeout(timer);
  }, []);

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
    // Der umgebende Container diktiert die Größe
    <div style={{ 
      width: '100%', 
      aspectRatio: '16 / 9', // Hält das Format proportional auf allen Bildschirmen
      minHeight: '250px',    // Fällt auf kleinen Handys nicht zu einem Schlitz zusammen
      maxHeight: '450px',    // Wird auf riesigen Monitoren nicht zu hoch
      backgroundColor: '#eaeaea', // Grauer Platzhalter, während OSM noch lädt
      marginBottom: '25px',
      position: 'relative'
    }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        // Hier greift die Verzögerung: src bleibt leer, bis loadSrc true ist
        src={loadSrc ? mapUrl : ""}
        style={{ 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          display: 'block' 
        }}
        title="OpenStreetMap Standort"
      />
      
      {/* Den Link absolut darunter positionieren, damit er das Layout der Karte nicht stört */}
      <div style={{ position: 'absolute', bottom: '-25px', right: '0' }}>
        <small>
          <a 
            href={`https://www.openstreetmap.org/?mlat=${numericLat}&mlon=${numericLon}#map=17/${numericLat}/${numericLon}`} 
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