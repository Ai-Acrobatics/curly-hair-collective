export default function Loading() {
  return (
    <div className="min-h-screen mesh-gradient flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-white/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold animate-spin" />
        </div>
        <p className="text-white/70 font-medium text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
