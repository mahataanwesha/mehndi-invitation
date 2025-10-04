import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [showCard, setShowCard] = useState(false);
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    if (showCard) {
      const interval = setInterval(() => {
        const size = 20 + Math.random() * 20; // 20-40px
        const duration = 3 + Math.random() * 3; // 3-6s
        const left = Math.random() * 100;

        setFlowers((prev) => [
          ...prev,
          { id: Date.now() + Math.random(), left, size, duration },
        ]);
      }, 300);

      return () => clearInterval(interval);
    }
  }, [showCard]);

  return (
    <div className="container">
      {!showCard && (
        <button className="click-btn" onClick={() => setShowCard(true)}>
          🎉 Click Here 🎉
        </button>
      )}

      {/* Flowers (always render on top, z-index set in CSS) */}
      {flowers.map((f) => (
        <div
          key={f.id}
          className="flower"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDuration: `${f.duration}s`,
          }}
        >
          🌸
        </div>
      ))}

      {/* Show card only after click */}
      {showCard && (
        <div className="invitation-card fade-in">
          <img
            src="/invite.png"
            alt="Mehndi Invitation"
            className="card-image"
          />
        </div>
      )}
    </div>
  );
}
