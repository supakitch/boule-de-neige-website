import snowTexture from "@/assets/snow.jpg";

export const SnowballAnimation = () => {
  return (
    <>
      <style>
        {`
          @keyframes snowball-roll {
            0% {
              left: -3em;
              bottom: 70%;
              transform: rotate(0deg) scale(0.8);
            }
            100% {
              left: calc(100% + 3em);
              bottom: 0%;
              transform: rotate(1080deg) scale(1.5);
            }
          }
          
          @keyframes ballInnerShadow {
            from {
              transform: rotate(0);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes ballTexture {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(50%);
            }
          }
          
          .snowball {
            position: absolute;
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
            animation: snowball-roll 10s linear infinite;
          }
          
          .snowball__texture,
          .snowball__inner-shadow,
          .snowball__side-shadows {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          
          .snowball__inner-shadow {
            animation: ballInnerShadow 10s linear infinite;
            box-shadow:
              0 0.1em 0.2em hsla(0, 0%, 0%, 0.3),
              0 0 0.2em hsla(0, 0%, 0%, 0.1) inset,
              0 -1em 0.5em hsla(0, 0%, 0%, 0.15) inset;
          }
          
          
          .snowball__side-shadows {
            background-color: hsla(0, 0%, 0%, 0.1);
            filter: blur(2px);
            transform: scale(0.75, 1.1);
            z-index: -1;
          }
          
          .snowball__highlight {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 1.5px solid rgba(255, 255, 255, 0.6);
            filter: blur(0.5px);
            z-index: 0;
          }
          
          .snowball__texture {
            overflow: hidden;
            transform: translate3d(0, 0, 0);
          }
          
          .snowball__texture:before {
            animation: ballTexture 10s linear infinite reverse;
            background: url(${snowTexture}) 0 0 / 50% 100%;
            content: "";
            display: block;
            filter: brightness(1.05);
            position: absolute;
            top: 0;
            right: 0;
            width: 200%;
            height: 100%;
          }
        `}
      </style>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-visible z-50" style={{ fontSize: '16px' }}>
        <div className="snowball">
          <div className="snowball__highlight"></div>
          <div className="snowball__texture"></div>
          <div className="snowball__inner-shadow"></div>
          
          <div className="snowball__side-shadows"></div>
        </div>
      </div>
    </>
  );
};
