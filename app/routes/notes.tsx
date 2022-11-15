import { Link, Outlet } from "@remix-run/react";



const NotesPage = () => {
  return (
    <main className="h-screen  bg-indigo-300 flex flex-col items-center ">
      <div className="max-w-2xl mx-auto space-y-16 w-full">
        <div className="flex mt-32">
          <Link
            to="new"
            className="px-6 py-3 rounded-xl bg-[#6c63ff] text-white ml-auto font-bold"
          >
            Add Note
          </Link>
        </div>
        <div className="max-w-xl space-y-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default NotesPage;
