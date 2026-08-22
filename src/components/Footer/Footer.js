import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', // Zentriert Logo und Links auf einer vertikalen Linie
      flexWrap: 'wrap',     // Bricht auf kleinen Bildschirmen um
      backgroundColor: '#f8f9fa', 
      padding: '20px 30px', 
      borderTop: '1px solid #e7e7e7',
      marginTop: '40px'
    }}>
      
      {/* Linke Seite: Zentralarchiv Logo (mit Platzhalter) */}
      <div style={{ marginBottom: '10px' }}>
        <img 
          // Hier später den echten Pfad zum Logo eintragen, z. B. '/images/logo-archiv.png'
          src="https://via.placeholder.com/250x60?text=Logo+Zentralarchiv" 
          alt="Logo des Universitätsarchivs Bremen" 
          style={{ maxHeight: '60px', objectFit: 'contain' }}
        />
      </div>

      {/* Rechte Seite: Die rechtlichen Links nebeneinander */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <a 
          href="https://www.uni-bremen.de/impressum?disableOptIn=1&cHash=050edf422cfcb27451fbd64bc1b60dfa" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={linkStyle}
        >
          Impressum
        </a>
        
        <a 
          href="https://www.uni-bremen.de/datenschutz?disableOptIn=1&cHash=889a57a8fa960730635bc4fd1896a651" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={linkStyle}
        >
          Datenschutzerklärung
        </a>
        
        <a 
          href="https://www.uni-bremen.de/barrierefreiheit/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={linkStyle}
        >
          Barrierefreiheit
        </a>
      </div>

    </footer>
  );
}

// Das Styling für die Links wurde hier ausgelagert, um den Code übersichtlich zu halten
const linkStyle = {
  color: '#0078A8', // Das typische Uni-Bremen-Blau
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '500'
};