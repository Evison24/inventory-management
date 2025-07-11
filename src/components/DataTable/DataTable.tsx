import { Link } from "react-router";
import { StatusType } from "../../types/tableType";
const DataTable = () => {
  const people = [
    {
      id: 1,
      status: { status: StatusType.COMPLETED, text: "Completed" },
      job_site: "1658 E 23rd St, Brooklyn, NY 11229, USA",
    },
    {
      id: 2,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "1705 E 22nd St, Brooklyn, NY 11229, USA",
    },
    {
      id: 3,
      status: { status: StatusType.COMPLETED, text: "Completed" },
      job_site: "47 Lake St, Brooklyn, NY 11223, USA",
    },
    {
      id: 4,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "256 Bay 19th St, Brooklyn, NY 11214, USA",
    },
    {
      id: 5,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "6908 13th Ave, Brooklyn, NY 11228, USA",
    },
    {
      id: 6,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "1329 56th St, Brooklyn, NY 11219, USA",
    },
    {
      id: 7,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "588 Lenox Rd, Brooklyn, NY 11203, USA",
    },
    {
      id: 8,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "200 Newport St, Brooklyn, NY 11212, USA",
    },
    {
      id: 9,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "158-39 99th St, Queens, NY 11414, USA",
    },
    {
      id: 10,
      status: { status: StatusType.IN_PROGRESS, text: "In Progress" },
      job_site: "86-04 Shore Pkwy, Jamaica, NY 11414, USA",
    },
    {
      id: 11,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "95-01 Linden Blvd, Jamaica, NY 11417, USA",
    },
    {
      id: 12,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "1705 E 22nd St, Brooklyn, NY 11229, USA",
    },
    {
      id: 13,
      status: { status: StatusType.COMPLETED, text: "Completed" },
      job_site: "47 Lake St, Brooklyn, NY 11223, USA",
    },
    {
      id: 14,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "256 Bay 19th St, Brooklyn, NY 11214, USA",
    },
    {
      id: 15,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "6908 13th Ave, Brooklyn, NY 11228, USA",
    },
    {
      id: 16,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "1329 56th St, Brooklyn, NY 11219, USA",
    },
    {
      id: 17,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "588 Lenox Rd, Brooklyn, NY 11203, USA",
    },
    {
      id: 18,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "200 Newport St, Brooklyn, NY 11212, USA",
    },
    {
      id: 19,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "158-39 99th St, Queens, NY 11414, USA",
    },
    {
      id: 20,
      status: { status: StatusType.IN_PROGRESS, text: "In Progress" },
      job_site: "86-04 Shore Pkwy, Jamaica, NY 11414, USA",
    },
    {
      id: 21,
      status: { status: StatusType.ON_HOLD, text: "On Hold" },
      job_site: "95-01 Linden Blvd, Jamaica, NY 11417, USA",
    },
    {
      id: 22,
      status: { status: StatusType.IN_PROGRESS, text: "In Progress" },
      job_site: "86-04 Shore Pkwy, Jamaica, NY 11414, USA",
    },
  ];

  return (
    <div className="pt-[10px]">
      <div className="grid bg-white">
        <div className="sm:flex-auto">
          <div className="bg-[#F8F8FA] flex justify-start items-center pl-4 w-full h-11 rounded-t-[10px]">
            <h1 className="text-base  font-semibold text-gray-900">Title</h1>
          </div>
          <div className="sm:flex grid mt-2 justify-between items-center  text-black">
            <p className=" text-sm text-gray-700">Informative piece of text can be used in regarding this modal.</p>
            <div className="mt-4  h-10 flex gap-2 sm:mt-0 sm:ml-16 sm:flex-none">
              <input
                type="text"
                placeholder="Search"
                className="block rounded-md sm:w-30 w-2/3 bg-white text-left px-3 py-2  text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />

              <button
                type="button"
                className="block rounded-md sm:w-20 w-1/3 bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root bg-white">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6  lg:px-8 max-h-[926px] overflow-y-auto">
            <table className="min-w-full divide-y bg-white divide-gray-300 ">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-center text-sm font-semibold text-gray-900 sm:pl-3">
                    Jobsite Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-center ">
                {people.map((job) => (
                  <tr key={job.id} className="even:bg-gray-50">
                    <Link to={`/inventory_dashboard/${job.id}`} target="_blank" className="flex justify-center text-[#1264A3] text-left">
                      <td className="py-4 pr-3 pl-4 w-1/2 text-sm font-medium whitespace-nowrap sm:pl-3">{job.job_site}</td>
                    </Link>

                    <td
                      className={`px-3 ${
                        job.status.status === StatusType.COMPLETED
                          ? "bg-[#7AC14D]"
                          : job.status.status === StatusType.IN_PROGRESS
                          ? "bg-[#ECDE7C]"
                          : job.status.status === StatusType.ON_HOLD
                          ? "bg-[#FE4C4A] "
                          : "bg-transparent"
                      } py-4 w-1/2 text-sm whitespace-nowrap text-gray-500`}
                    >
                      {job.status.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
