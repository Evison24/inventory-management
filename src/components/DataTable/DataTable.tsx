import { Link } from "react-router";
import { StatusType } from "../../types/tableType";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import { categoryOptions, jobs, statusOptions } from "../../utilies/constants";
import Dropdown from "../Dropdown";
import InfoIcon from "../../assets/info.svg";
import { DropdownType, SelectionType } from "../../types/dropdownType";

const DataTable = () => {
  const [open, setOpen] = useState(false);
  const [jobName, setJobName] = useState("");
  const [jobSites, setJobSites] = useState(jobs);
  const [jobCategory, setJobCategory] = useState<SelectionType[]>([]);
  const [jobStatus, setJobStatus] = useState<SelectionType>();
  const handleSelection = (job, type: DropdownType) => {
    if (type === DropdownType.CATEGORY) {
      setJobCategory((prev) => {
        if (prev.some((item) => item.id === job.id)) {
          return prev;
        }
        return [...prev, job];
      });
    }
    if (type === DropdownType.STATUS) {
      setJobStatus(job);
    }
  };
  const handleRemove = (id: number | string) => {
    setJobCategory((prev) => prev.filter((item) => item.id !== id));
  };
  const handleSaveJobSites = () => {
    // this will add to jobSites
  };
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="grid mt-10 font-sans">
          <div className="flex items-center gap-2">
            <img className="h-4 w-4" src={InfoIcon} alt="info_icon" />
            Informative piece of text that can be used regarding this modal.
          </div>
          <div>
            <label className="pl-2  font-normal ">Name</label>
            <input
              type="text"
              placeholder="Type the jobsite's name"
              className="p-2 rounded-md border border-gray-200 bg-[#F5F5F7] text-[#E0E0E1] h-8 w-full"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />
          </div>
          <div className="flex gap-2 h-52">
            <Dropdown
              type={DropdownType.CATEGORY}
              label={"Category Included"}
              values={jobCategory}
              onChange={handleSelection}
              selections={categoryOptions}
              handleRemove={handleRemove}
              className={"w-2/3 relative text-left mt-2"}
            />
            <Dropdown
              type={DropdownType.STATUS}
              label={"Status"}
              values={jobStatus}
              onChange={handleSelection}
              selections={statusOptions}
              className={"w-1/3 relative text-left mt-2"}
            />
          </div>
        </div>
      </Modal>
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
                  onClick={() => setOpen(true)}
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
                  {jobSites.map((job) => (
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
    </>
  );
};

export default DataTable;
