export const SnowfallAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none overflow-hidden z-10">
      <div className="snowball" />
      <style>{`
        .snowball {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ffffff, #f0f0f0);
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.6);
          filter: blur(1px);
          animation: snowball-fall 7s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes snowball-fall {
          0% {
            transform: translateX(-120px) translateY(-120px) scale(0.2);
            opacity: 0;
          }
          5% {
            opacity: 0.9;
          }
          95% {
            opacity: 0.9;
          }
          100% {
            transform: translateX(calc(100vw + 120px)) translateY(300px) scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
