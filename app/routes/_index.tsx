import { Form, redirect } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  // this is on serverSide
  console.log(request);
  const formData = await request.formData();
  const json = Object.fromEntries(formData.entries());

  console.log(json);

  return redirect("/");
}

export default function Index() {
  return (
    <div className="p-10">
      <h1 className="text-5xl">Work journal</h1>
      <p className="mt-3 text-xl text-gray-400">
        Doing and learnings. Update weekly.
      </p>
      <div className="my-8 border p-2">
        <Form method="post">
          <p className="italic">Create an entry</p>
          <div>
            <div className="mt-4">
              <input type="date" name="date" className="text-gray-700" />
            </div>
            <div className="space-x-6 mt-2">
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  value="work"
                  name="category"
                />
                Work
              </label>
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  value="learning"
                  name="category"
                />
                Learning
              </label>
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  value="interesting-things"
                  name="category"
                />
                Interesting things
              </label>
            </div>

            <div className="mt-2">
              <textarea
                name="entry"
                placeholder="Write your entry..."
                className="w-full text-gray-700"
              />
              <div className="mt-2 text-right">
                <button className="bg-blue-500 py-1 px-4 font-medium text-white" type="submit">
                  Save
                </button>
              </div>
            </div>
          </div>
        </Form>
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
