import React from 'react';
import './Healthcare.css';

const Healthcare = () => {
  return (
    <div className="healthcare-container">
      <div className="healthcare-background">
        <div className="healthcare-content">
          <h1 className="healthcare-title">Healthcare</h1>
          <p className="healthcare-company">AMXSOL∞</p>
          <p className="healthcare-description">Contact us for ∞infinite possibilities</p>
          <p className="healthcare-services">
            Business Solutions | Technology Solutions | Talent Solutions |
          </p>
          <div className="healthcare-social">
            <span>Connect with us on: </span>
            <span className="healthcare-social-icons">
              <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
              <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
              <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
              <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
              <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
              <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
              <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
