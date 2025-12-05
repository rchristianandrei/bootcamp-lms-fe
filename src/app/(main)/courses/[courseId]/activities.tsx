export function Activities() {
  return (
    <>
      <section className="flex flex-col gap-2">
          <section className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search"
              className="p-1 border rounded"
            ></input>
            <button>Add</button>
          </section>
          <div className="rounded border overflow-x-auto">
            <div className="min-w-[700px] h-[500px]">
              <div className="flex flex-row items-center text-center bg-green-500 rounded-t p-2 text-white">
                <div className="flex-1 text-left">Action</div>
                <div className="flex-1 text-left">Related Task</div>
                <div className="w-20 md:w-35">Added Progress</div>
                <div className="w-20 md:w-35">Current Progress</div>
                <div className="w-55">Date</div>
              </div>
              <div className="flex flex-row items-center text-center px-2 py-1 border-b-1">
                <div className="flex-1 text-left">Finished Chapter 1</div>
                <div className="flex-1 text-left">Chapter 1</div>
                <div className="w-20 md:w-35">+100%</div>
                <div className="w-20 md:w-35">100%</div>
                <div className="w-55">November 19, 2025</div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
