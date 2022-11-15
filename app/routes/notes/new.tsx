import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

type NoteAction = {
  title: string;
  content: string;
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData) as NoteAction;
  const response = await fetch("http://localhost:3004/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: noteData.title,
      content: noteData.content,
    }),
  });

  if (response.ok) {
    return redirect("/notes");
  }

  return json({
    error: "Sorry",
  });
}

const AddNewNotePage = () => {
  return (
    <Form method="post" className="flex flex-col gap-4 w-full">
      <label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="w-full rounded-xl focus:ring-violet-500"
        />
      </label>
      <label>
        <textarea
          className="w-full rounded-xl focus:ring-violet-500"
          name="content"
          id=""
          cols={30}
          rows={10}
          placeholder="Your notes"
        ></textarea>
      </label>
      <button className="px-8 py-3 ml-auto text-white font-bold bg-violet-500 hover:bg-violet-600 transition-colors rounded-xl">
        Add
      </button>
    </Form>
  );
};

export default AddNewNotePage;
