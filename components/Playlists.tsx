"use client";

import { PlayCard } from "./PlaylistCard";

export function Playlists() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="w-4/5 h-fit max-h-[450px] overflow-y-auto p-3 mb-10 mr-5 hover:bg-zinc-900 hover:shadow-inner rounded-2xl">
      <h1 className="text-center text-xl mb-4">playlists / podcast</h1>

      {numbers.map((item) => {
        return <PlayCard />;
      })}
    </div>
  );
}
