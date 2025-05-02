import React from 'react'

export default function App() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <img
        src="https://cashmonetik.com/wp-content/uploads/2024/12/CASH-MONETIK-nwnw.png"
        alt="Logo CashMonétik"
        style={{ width: "150px", marginBottom: "1rem" }}
      />
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        marginBottom: '1rem'
      }}>
        <iframe
          src="https://www.youtube.com/embed/W2xpzcQQev8?autoplay=1&mute=1&loop=1&playlist=W2xpzcQQev8"
          title="Présentation CashMonétik"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        ></iframe>
      </div>
      <h1>Réservez votre rendez-vous</h1>
      <p>Choisissez votre créneau en 1 clic.</p>
      <button
        onClick={() => window.open("https://calendly.com/cashmonetik/callme", "_blank")}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#1E90FF",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Prendre rendez-vous
      </button>
    </div>
  )
}