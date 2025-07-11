import { StatusType } from "../types/tableType";

export const jobs = [
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

export const categoryOptions = [
  { id: 1, value: "sidewalk_sheed", text: "Sidewalk Shed", colorCode: "#67AA3C" },
  { id: 2, value: "scaffold", text: "Scaffold", colorCode: "#EFD652" },
  { id: 3, value: "shoring", text: "Shoring", colorCode: "#9640BE" },
];

export const statusOptions = [
  { id: 1, value: StatusType.COMPLETED, text: "Completed" },
  { id: 2, value: StatusType.IN_PROGRESS, text: "Progress" },
  { id: 3, value: StatusType.ON_HOLD, text: "On Hold" },
];
