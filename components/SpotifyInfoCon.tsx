import Link from "next/link";
import { FaDownload, FaUpload, FaTrashAlt } from "react-icons/fa";

export default function SpotifyCleanupSteps() {
  return (
    <section className="spotifydatacon w-full text-white py-16 px-4 flex justify-center">
      <div className="max-w-3xl w-full space-y-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Clean up your Spotify in 3 easy steps
        </h2>

        <div className="bg-neutral-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-green-400 text-neutral-900 flex items-center justify-center font-bold text-lg">
              1
            </div>
          </div>
          <div className="flex-shrink-0 text-green-400 text-2xl">
            <FaDownload />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Download your data</h3>
            <p className="text-gray-300">
              Go to{" "}
              <a
                href="https://www.spotify.com/account/privacy"
                className="underline hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify's privacy page
              </a>{" "}
              and request your full listening history. You'll get an email with
              the data in a few days.
            </p>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-green-400 text-neutral-900 flex items-center justify-center font-bold text-lg">
              2
            </div>
          </div>
          <div className="flex-shrink-0 text-green-400 text-lg">
            <FaUpload />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Upload your files</h3>
            <p className="text-gray-300">
              Once you've received the data,{" "}
              <Link href="/upload" className="underline hover:text-green-300">
                upload it here
              </Link>
              . We'll show you all your tracks with play count and other
              details.
            </p>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-green-400 text-neutral-900 flex items-center justify-center font-bold text-lg">
              3
            </div>
          </div>
          <div className="flex-shrink-0 text-green-400 text-lg">
            <FaTrashAlt />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Delete old songs</h3>
            <p className="text-gray-300">
              Easily filter out songs you no longer care about, and delete them
              in bulk — or one by one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
