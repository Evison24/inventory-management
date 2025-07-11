import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function Modal({ open, setOpen, children }: any) {
  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10 text-black">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center  text-center sm:items-center ">
            <DialogPanel
              transition
              className="relative w-11/12 max-w-4xl mx-auto transform overflow-hidden rounded-lg bg-white px-5 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:pb-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="flex justify-between ">
                <span className="text-black">Title</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md  bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  X
                </button>
              </div>
              {children}
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel Changes
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
