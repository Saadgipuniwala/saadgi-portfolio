export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full grain-overlay animate-grain opacity-[0.035]"
    />
  );
}
