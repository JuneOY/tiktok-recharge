// src/components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-8 flex flex-col items-center">
        <div className="tiktok">
          <div className="loading">
            <svg preserveAspectRatio="none" viewBox="0 0 160 90" width="160" height="90">
              <defs>
                <mask id="redhole">
                  <rect width="100%" height="100%" fill="white"></rect>
                  <circle fill="black" className="loading-red loading-black"></circle>
                </mask>
                <mask id="greenhole">
                  <rect width="100%" height="100%" fill="white"></rect>
                  <circle fill="black" className="loading-green loading-black"></circle>
                </mask>
              </defs>
              <circle className="loading-green" mask="url(#redhole)"></circle>
              <circle className="loading-red" mask="url(#greenhole)"></circle>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .tiktok {
          width: 48px;
          height: 48px;
        }
  
        .loading {
          display: flex;
          width: 200px;
          height: 200px;
          align-items: center;
          transform: scale(0.24);
          transform-origin: 0 0;
        }
  
        .loading-black {
          fill: #000 !important;
        }
  
        .loading-red {
          fill: #fe2c55;
          stroke-width: 0;
          r: 36px;
          cx: 120px;
          cy: 44px;
          animation: tiktok-red 1s cubic-bezier(0.05,0,1,1) infinite;
        }
  
        .loading-green {
          fill: #3af2ff;
          stroke-width: 0;
          r: 36px;
          cx: 40px;
          cy: 44px;
          animation: tiktok-green 1s cubic-bezier(0.05,0,1,1) infinite;
        }
  
        @keyframes tiktok-green {
          25% {
            cx: 80px;
            r: 43.2px;
          }
          50% {
            cx: 120px;
            r: 36px;
          }
          75% {
            cx: 80px;
            r: 21.6px;
          }
          to {
            cx: 40px;
            r: 36px;
          }
        }
  
        @keyframes tiktok-red {
          25% {
            cx: 80px;
            r: 24px;
          }
          50% {
            cx: 40px;
            r: 36px;
          }
          75% {
            cx: 80px;
            r: 43.2px;
          }
          to {
            cx: 120px;
            r: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;