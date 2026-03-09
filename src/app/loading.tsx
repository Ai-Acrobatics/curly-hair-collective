export default function Loading() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-pink-200" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 animate-spin" />
        </div>
        <p className="text-pink-400 font-medium text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
