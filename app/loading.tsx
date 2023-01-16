export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screenbg-white/40 backdrop-blur-lg">
      <div
        className="spinner-border animate-spin  inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="hidden">Loading...</span>
      </div>
    </div>
  );
}
