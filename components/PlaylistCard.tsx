"use client";

export function PlayCard() {
  return (
    <div className="w-full max-w-xl mx-auto bg-gradient-to-r mb-4 from-gray-800 via-gray-900 to-black rounded-lg shadow-lg p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-200">
      <div className="w-16 h-16 bg-gray-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
        🎵
      </div>
      <div className="flex-1">
        <h3 className="text-white text-lg font-semibold truncate">
          Playlist Name
        </h3>
        <p className="text-gray-400 text-sm truncate">
          Some description or details
        </p>
      </div>
      <div className="text-gray-400 text-sm whitespace-nowrap">73</div>
    </div>
  );
}
