import { PrismaClient } from "@prisma/client";
import { ActionFunctionArgs } from "@remix-run/node";
import { redirect, useFetcher } from "@remix-run/react";

export async function action({ request }: ActionFunctionArgs) {
  // simulate long load from api
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const db = new PrismaClient();

  const formData = await request.formData();
  const { date, type, text } = Object.fromEntries(formData.entries()) as {
    date: string;
    type: string;
    text: string;
  };

  if (
    typeof date !== "string" ||
    typeof type !== "string" ||
    typeof text !== "string"
  ) {
    throw new Error("Bad request");
  }

  await db.entry.create({
    data: {
      date: new Date(date),
      type: type,
      text: text,
    },
  });

  return redirect("/");
}

export default function Index() {
  const fetcher = useFetcher()
  console.log(fetcher.state)
  return (
    <div className="p-10">
      <h1 className="text-5xl">Work journal</h1>
      <p className="mt-3 text-xl text-gray-400">
        Doing and learnings. Update weekly.
      </p>
      <div className="my-8 border p-2">
        <fieldset 
          className="disabled:opacity-70"
          disabled={fetcher.state === "submitting"}>
        <fetcher.Form method="post" className="mt-2">
          <p className="italic">Create an entry</p>
          <div>
            <div className="mt-4">
              <input
                type="date"
                name="date"
                className="text-gray-700"
                required
              />
            </div>
            <div className="space-x-6 mt-2">
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  value="work"
                  name="type"
                  required
                />
                Work
              </label>
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  value="learning"
                  name="type"
                  required
                />
                Learning
              </label>
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  value="interesting-things"
                  name="type"
                  required
                />
                Interesting things
              </label>
            </div>

            <div className="mt-2">
              <textarea
                name="text"
                placeholder="Write your entry..."
                className="w-full text-gray-700"
                required
              />
              <div className="mt-2 text-right">
                <button
                  className="bg-blue-500 py-1 px-4 font-medium text-white"
                  type="submit"
                >
                  {fetcher.state === "submitting" ? "Saving...": "Save"}
                </button>
              </div>
            </div>
          </div>
        </fetcher.Form>
        </fieldset>
       
      </div>

      <div className="mt-4">
        <p className="font-bold">
          Week of Feb 20<sup>th</sup>, 2023
        </p>
        <div className="mt-3 space-y-4">
          <div>
            <p>Work:</p>
            <ul className="ml-6 list-disc">
              <li>First item</li>
            </ul>
          </div>
          <div>
            <p>Learnings: </p>
            <ul className="ml-6 list-disc">
              <li>First learning</li>
              <li>Second learning</li>
            </ul>
          </div>
          <div>
            <p>Interesting things:</p>
            <ul className="ml-6 list-disc">
              <li>Something cool!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
