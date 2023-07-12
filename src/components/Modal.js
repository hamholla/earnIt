export default function ActivityModal({ activity, onClose }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{activity.name}</h3>
            </div>
            <div className="relative p-6 flex-auto text-center">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Calories spent:
              </p>
              <p className="text-lg">{activity.calories}</p>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                High Lifes earned:
              </p>
              <p className="text-lg">{(activity.calories / 141).toFixed(1)}</p>
            </div>
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
