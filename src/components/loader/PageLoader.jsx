export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">

      <div className="flex gap-2">
        <span className="w-3 h-3 bg-black rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-black rounded-full animate-bounce delay-150"></span>
        <span className="w-3 h-3 bg-black rounded-full animate-bounce delay-300"></span>
      </div>

    </div>
  );
}