import snowTexture from "@/assets/snow.jpg";

export const SnowballAnimation = () => {
  return (
    <>
      <style>
        {`
          @keyframes snowball-roll {
            0% {
              left: -3em;
              transform: rotate(0deg) scale(0.8);
            }
            100% {
              left: calc(100% + 3em);
              transform: rotate(-1080deg) scale(1.5);
            }
          }
          
          @keyframes ballInnerShadow {
            from {
              transform: rotate(0);
            }
            to {
              transform: rotate(-360deg);
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
            bottom: 2em;
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
            animation: snowball-roll 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
            animation: ballInnerShadow 15s linear infinite;
            box-shadow:
              0 0.1em 0.2em hsla(0, 0%, 0%, 0.3),
              0 0 0.2em hsla(0, 0%, 0%, 0.1) inset,
              0 -1em 0.5em hsla(0, 0%, 0%, 0.15) inset;
          }
          
          .snowball__outer-shadow {
            position: absolute;
            background-image: linear-gradient(hsla(0, 0%, 0%, 0.15), hsla(0, 0%, 0%, 0));
            border-radius: 0 0 50% 50% / 0 0 100% 100%;
            filter: blur(2px);
            top: 50%;
            left: 0;
            width: 100%;
            height: 250%;
            transform: rotate(20deg);
            transform-origin: 50% 0;
            z-index: -2;
          }
          
          .snowball__side-shadows {
            background-color: hsla(0, 0%, 0%, 0.1);
            filter: blur(2px);
            transform: scale(0.75, 1.1);
            z-index: -1;
          }
          
          .snowball__texture {
            overflow: hidden;
            transform: translate3d(0, 0, 0);
          }
          
          .snowball__texture:before {
            animation: ballTexture 15s linear infinite;
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
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-visible z-10" style={{ fontSize: '16px' }}>
        <div className="snowball">
          <div className="snowball__texture"></div>
          <div className="snowball__inner-shadow"></div>
          <div className="snowball__outer-shadow"></div>
          <div className="snowball__side-shadows"></div>
        </div>
      </div>
    </>
  );
};
