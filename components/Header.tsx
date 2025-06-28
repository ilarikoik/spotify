export function Header() {
  return (
    <>
      <div>
        <div className="sm:hidden w-full text-lg flex flex-row justify-center items-center px-3 py-2 shadow-black shadow-lg">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
            alt="Girl in a jacket"
            //   className="h-fit w-fit"
            width="40"
            height="20"
          />
          <h1 className="ml-3">My Spotify</h1>
        </div>
      </div>
      <div className="hidden sm:flex h-20 w-full shadow-black shadow-2xl justify-between items-center">
        <div className=" w-2/5 text-xl flex flex-row items-center px-3 py-1 ">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
            alt="Girl in a jacket"
            //   className="h-fit w-fit"
            width="40"
            height="20"
          />
          <h1 className="ml-3">My Spotify</h1>
        </div>
        {/* <div className="w-2/5 text-md flex justify-around">
          <p>eka</p>
          <p>toka</p>
        </div> */}
      </div>
    </>
  );
}
