export default function Index() {
  return (
    <div className="p-10">
      <h1 className="text-5xl">Work journal</h1>
      <p className="mt-3 text-xl text-gray-400">
        Doing and learnings. Update weekly.
      </p>

      <div className="mt-4">
          <p
            className="font-bold"
          >
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
