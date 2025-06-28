import Bottom from "@/components/Bottom";
import { Playlists } from "@/components/Playlists";
import SpotifyInfoSection from "@/components/SpotifyInfoCon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full h-screen flex flex-col items-center ">
      <div className=" w-full h-fit flex flex-col md:flex-row justify-center items-center mt-20 max-w-[1600px]">
        {/* musiikki */}
        <Playlists />
        {/* podcast */}
        <Playlists />
      </div>
      <SpotifyInfoSection></SpotifyInfoSection>
      <Bottom></Bottom>
    </div>
  );
}
