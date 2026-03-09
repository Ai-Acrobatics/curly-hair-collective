export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-14 h-14 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-[3px] border-gray-200" />
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-gold animate-spin" />
        </div>
        <p className="text-gray-400 font-medium text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
