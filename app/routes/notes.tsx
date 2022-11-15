import { Link, Outlet } from "@remix-run/react";

const NotesPage = () => {
  return (
    <main className="h-screen  bg-indigo-300 flex flex-col items-center ">
      <div className="max-w-2xl mx-auto space-y-16 w-full">
        <nav className="flex mt-32">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition-colors text-white  font-bold"
          >
            Home
          </Link>
          <div className="flex ml-auto items-center gap-2">
            <Link
              to="."
              className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition-colors text-white ml-auto font-bold"
            >
              Your Notes
            </Link>
            <Link
              to="new"
              className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 transition-colors text-white ml-auto font-bold"
            >
              Add New Note
            </Link>
          </div>
        </nav>
        <div className="space-y-4 w-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default NotesPage;
