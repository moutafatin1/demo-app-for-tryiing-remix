import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

type NoteAction = {
  title: string;
  content: string;
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData) as NoteAction;
  console.log(noteData);

  return redirect("/notes");
}

const AddNewNotePage = () => {
  return (
    <Form method="post" className="flex flex-col gap-4">
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
