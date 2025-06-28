"use client";
import { useState } from "react";

export function Footer() {
  const [play, setPlay] = useState(false);
  return (
    <>
      <div>
        <div className="sm:hidden w-full text-md flex flex-row justify-center items-center px-3 py-2 shadow-2xl shadow-white fixed bottom-0">
          <div className="flex flex-row w-full  items-center px-3 py-1  ">
            <div className="flex justify-start w-3/6 items-center ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeKOqT3GeRWum3jhkvs8j9b34zQ67VLp1qw&s"
                height="50"
                width="50"
              ></img>
              <p className="text-sm ml-2">Song name</p>
            </div>
            <div className="flex px-3 w-4/6 justify-evenly">
              <button>⏮ </button>
              <h1 className="w-fit px-2 " onClick={() => setPlay(!play)}>
                {play ? "▶" : "⏹"}
              </h1>
              <button>⏭</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbg hidden sm:flex h-fit p-4 w-full  justify-center  items-center fixed bottom-0 z-50 ">
        <div className="flex flex-row w-full items-center px-6 py-1 max-w-[1300px] text-xl">
          <div className="flex justify-center w-3/6 items-center ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeKOqT3GeRWum3jhkvs8j9b34zQ67VLp1qw&s"
              height="50"
              width="50"
            ></img>
            <p className="ml-2 bg-primary">Song name</p>
          </div>
          <div className="flex  px-3 w-2/6 justify-evenly text-2xl">
            <button>⏮</button>
            <h1 className="w-fit px-2 " onClick={() => setPlay(!play)}>
              {play ? "▶" : "⏹"}
            </h1>
            <button>⏭</button>
          </div>
        </div>
      </div>
    </>
  );
}
