export function AIBackground({ dense = false }: { dense?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 soft-bg" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* floating orbs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,#27D3FF55,transparent_60%)] animate-float" />
      <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,#00C89744,transparent_60%)] animate-float" style={{ animationDelay: "1.5s" }} />
      {dense && (
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,#0B5EA855,transparent_60%)] animate-float" style={{ animationDelay: "3s" }} />
      )}
      {/* particles */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 600" preserveAspectRatio="none">
        {Array.from({ length: 22 }).map((_, i) => {
          const x = (i * 71) % 800;
          const y = (i * 53) % 600;
          return (
            <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.5 : 1.5} fill="#27D3FF" opacity={0.5}>
              <animate attributeName="cy" values={`${y};${y - 20};${y}`} dur={`${4 + (i % 5)}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </svg>
    </div>
  );
}
