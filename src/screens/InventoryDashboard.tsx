import { useParams } from "react-router";
import noServiceIcon from "../assets/no-service.svg";
import ItemTable from "../components/ItemTable/ItemTable";
import { Item } from "../components/ItemModal/ItemModal";
import IconButton from "../components/IconButton/IconButton";
import LeftArrowIcon from "../assets/left-arrow.svg";

const InventoryDashboard = () => {
  const { jobId } = useParams();
  console.log(jobId, "jobId");

  const categories = [
    { id: 1, name: "Sidewalk Shed" },
    { id: 2, name: "Scaffold" },
    { id: 3, name: "Shoring" },
  ];

  const categoryIsSelected = true;
  const demoData: Item[] = [
    {
      id: 1,
      item: "G42295",
      quantity: 10,
      description: "Lorem …",
      notes: "Lorem …",
    },
  ];

  return (
    <div className="flex gap-[10px] h-[50vh] m-[10px] ">
      <div className="w-1/5 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] rounded-[10px]">
        <div className="h-[45px] text-left p-[10px] bg-[#F8F8FA] font-semibold rounded-t-[10px] mb-[10px]">
          {jobId}Jobsite Name
        </div>

        <div className="grid gap-3 justify-center items-center px-[10px]">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-full  flex items-center justify-center hover:bg-[#F0F0F5] bg-[#F8F8FA] cursor-pointer rounded-[5px] text-center"
            >
              {category.name}
            </div>
          ))}
          <div className="mt-auto flex justify-center items-end ">
            <IconButton
              icon={LeftArrowIcon}
              onClick={() => console.log("Download clicked")}
              buttonClass="bg-[#1264A3]"
              dividerClass="bg-[#0F5C97]"
            >
              Go Back
            </IconButton>
          </div>
        </div>
      </div>

      <div className="w-4/5 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] rounded-[10px]">
        {!categoryIsSelected ? (
          <>
            <div className="h-[45px] text-left p-[10px] bg-[#F8F8FA] font-semibold rounded-t-[10px]">
              Data Grid
            </div>
            <div className="flex flex-col items-center justify-center pt-12 ">
              <img
                src={noServiceIcon}
                alt="No Data"
                className="w-[192px] h-[150px] object-cover"
              />
              <h3>No Service Selected</h3>
              <p>Please select a service on your left to proceed.</p>
            </div>
          </>
        ) : (
          <ItemTable title="Sidewalk Shed" data={demoData} />
        )}
      </div>
    </div>
  );
};

export default InventoryDashboard;
