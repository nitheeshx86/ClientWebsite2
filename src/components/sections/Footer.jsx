import React, { useState } from 'react';

function Footer() {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      show: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setTooltip(prev => ({ ...prev, show: true }));
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, x: 0, y: 0 });
  };

  return (
    <section id="contact" className="section-footer">
      <div className="page-content">
        <div className="head-footer">
          <h1>Ready to Get Started?</h1>
        </div>
        <div className='pk'>
            <div 
              className="light-box"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
                <img src="logo.png" alt="" />
                {tooltip.show && (
                  <div 
                    className="tooltip"
                    style={{
                      left: `${tooltip.x + 20}px`,
                      top: `${tooltip.y - 100}px`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div>Design</div>
                    <div>and</div>
                    <div>Development</div>
                    <div>by Nitheesh K.</div>
                  </div>
                )}
            </div>
            <div className="blur-card-footer">
              <div className="footer-content">
                <div className="company-name">
                  <h2>Vaishnavi Krishnamurthy</h2>
                </div>
            
                <div className="contact-section">
                  <a 
                    href="https://wa.me/919940186385?text=I'm%20Excited%20to%20Upskill%20Myself%20!%20%F0%9F%9A%80"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-primary"
                  >
                    <div className="whatsapp-icon">💬</div>
                    <div className="whatsapp-text">WhatsApp</div>
                    <div className="whatsapp-subtitle">Primary Contact</div>
                  </a>
            
                  <div className="contact-details">
                    <p className="contact-item" data-text="example@vaishnavi.com">example@vaishnavi.com</p>
                    <p className="contact-item" data-text="+91 99401 86385">+91 99401 86385</p>
                  </div>
                </div>
                <p>©Vaishnavi Krishnamurthy 2025. Designed and Developed with Passion by Nitheesh K. 2025</p>
              </div>
            </div>
        </div>
      </div>

      <style jsx>{`
        .section-footer {
          min-height: 20vh;
          width: 100vw;
          background: linear-gradient(to bottom right, #1e40af, #3b82f6, #60a5fa);
          position: sticky;
          top: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .page-content {
          color: white;
          font-family: 'Rajdhani', sans-serif;
          max-width: 1200px;
          width: 100%;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          position: relative;
        }

        .head-footer {
          font-size: 3rem;
          text-align: center;
          text-shadow: 
            1px 1px 0 #1e3a8a,
            2px 2px 0 #1e3a8a,
            3px 3px 0 #1e3a8a,
            4px 4px 0 #1e3a8a,
            5px 5px 0 #1e3a8a,
            6px 6px 0 #1e3a8a,
            7px 7px 0 #1e3a8a,
            8px 8px 0 #1e3a8a,
            9px 9px 0 #1e3a8a,
            10px 10px 0 #1e3a8a,
            11px 11px 0 #1e3a8a,
            12px 12px 0 #1e3a8a,
            13px 13px 0 #1e3a8a,
            14px 14px 0 #1e3a8a,
            15px 15px 0 #1e3a8a,
            16px 16px 0 #1e3a8a,
            17px 17px 0 #1e3a8a,
            18px 18px 0 #1e3a8a,
            19px 19px 0 #1e3a8a,
            20px 20px 0 #1e3a8a,
            21px 21px 0 #1e3a8a,
            22px 22px 0 #1e3a8a,
            23px 23px 0 #1e3a8a,
            24px 24px 0 #1e3a8a,
            25px 25px 0 #1e3a8a,
            26px 26px 0 #1e3a8a,
            27px 27px 0 #1e3a8a,
            28px 28px 0 #1e3a8a,
            29px 29px 0 #1e3a8a,
            30px 30px 0 #1e3a8a;
            transform: translateY(-80%);
            width: 100%;
            position: relative;
        }
        
        @media (max-width: 768px) {
          .head-footer {
            font-size: 2rem;
          }
        }

        .light-box {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          background-color: #fff;
          width: 300px;
          height: 100px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          padding: 0;
          overflow: visible;
          transform: translateX(100%);
          cursor: pointer;
        }

        .light-box img {
          height: 100%;
          width: auto;
          object-fit: contain;
          margin-left: 0;
        }

        .tooltip {
          position: absolute;
          background-color: #ff8c00;
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          pointer-events: none;
          z-index: 99999;
          box-shadow: 0 4px 12px rgba(255, 140, 0, 0.4);
          font-family: 'Rajdhani', sans-serif;
          opacity: 0;
          animation: tooltipFadeIn 0.3s ease-out forwards;
          text-align: center;
          line-height: 1.2;
        }

        .tooltip div {
          margin: 2px 0;
        }

        @keyframes tooltipFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        @keyframes tooltipFadeOut {
          0% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) scale(0.8);
          }
        }

        .tooltip.fade-out {
          animation: tooltipFadeOut 0.2s ease-in forwards;
        }

        .tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #ff8c00;
        }

        .blur-card-footer {
          position: relative;
          width: 80vw;
          max-width: 1000px;
          min-height: 350px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 40px;
          color: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          bottom: 20px;
          z-index: 7000;
        }

        .blur-card-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          pointer-events: none;
        }

        .blur-card-footer:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          position: relative;
          z-index: 1;
        }

        .company-name h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          text-align: center;
          background: linear-gradient(45deg, #ffffff, #e0f2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .contact-section {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .whatsapp-primary {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px;
          background: rgba(37, 211, 102, 0.2);
          border: 2px solid rgba(37, 211, 102, 0.4);
          border-radius: 15px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .whatsapp-primary:hover {
          background: rgba(37, 211, 102, 0.3);
          border-color: rgba(37, 211, 102, 0.6);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        .whatsapp-icon {
          font-size: 3rem;
          margin-bottom: 8px;
        }

        .whatsapp-text {
          font-size: 1.8rem;
          font-weight: 700;
          color: #25d366;
          margin-bottom: 5px;
        }

        .whatsapp-subtitle {
          font-size: 1rem;
          opacity: 0.9;
          font-weight: 300;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0;
          color: rgba(255, 255, 255, 0.95);
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: all;
          -webkit-user-select: all;
          -moz-user-select: all;
          -ms-user-select: all;
        }

        .contact-item:hover {
          color: #ffffff;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .section-footer {
            padding: 1rem;
          }
          
          .blur-card-footer {
            padding: 25px;
          }
          
          .footer-content {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 25px;
          }
          
          .social-links {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .light-box {
            width: 120px;
            height: 35px;
          }
        }

        .pk{
            display: grid;
            grid-template-column: 3fr 1fr;
            background-color:
        }
        
        .contact-section a{
            text-decoration: none;
        }

      `}</style>
    </section>
  );
}

export default Footer;