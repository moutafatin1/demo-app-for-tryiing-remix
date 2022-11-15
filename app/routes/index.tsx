import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="h-screen bg-gradient-to-tl from-indigo-300 to-indigo-400 flex flex-col item-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-800">
          A better way of keeping track of your notes
        </h1>
        <p className="text-lg font-semibold text-slate-600">
          Try our early beta and never loose track of your notes again!
        </p>
        <Link
          to="notes"
          className="inline-block px-8 py-4 rounded-lg font-bold text-white bg-indigo-600 transition-all hover:-translate-y-1 hover:bg-indigo-600 active:scale-90"
        >
          Try Now!
        </Link>
      </div>
    </main>
  );
}
