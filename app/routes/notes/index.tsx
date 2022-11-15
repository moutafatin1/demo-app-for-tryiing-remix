import { useLoaderData } from "@remix-run/react";

type Note = {
  id: number;
  title: string;
  content: string;
};

export async function loader() {
  const response = await fetch("http://localhost:3004/notes");
  const notes = (await response.json()) as Note[];

  return notes;
}

const NotesIndex = () => {
  const notes = useLoaderData<typeof loader>();

  return (
    <>
      {notes && (
        <ul>
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex flex-col gap-4 p-4 bg-purple-500 text-slate-50 w-64 rounded-xl"
            >
              <span className="text-center text-lg font-bold">
                {note.title}
              </span>
              <span>{note.content}</span>
            </li>
          ))}
        </ul>
      )}
      {notes.length === 0 && (
        <div>
          <h1 className="text-center py-4 text-4xl font-bold text-white">
            You don't have any notes
          </h1>
          <img src="/undraw_taking_notes_re_bnaf.svg" alt="" />
        </div>
      )}
    </>
  );
};

export default NotesIndex;
