import React, {
  useContext,
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import GetJob from "../components/GetJob";
import MainLayout from "../layout/MainLayout";
import axios from "axios";
import { AddJobType, Job, JobType, SearchType } from "../types/type";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../modules/users/hooks/useUser";
import { StatisticsContext } from "../../contexts/StaticticsContext";
import { ToastContainer, toast } from "react-toastify";
import { ToastContext } from "../../contexts/ToastContext";

interface Props {
  job: Job[];
}
interface SearchQuery {
  name: string;
  // category: string;
  // location: string;
}
function AllJobs() {
  const [job, setJob] = useState<any>([]);
  const { user }: any = useAuthContext();
  const { showToast }: any = useContext(ToastContext);

  const { page, setPage }: any = useContext(StatisticsContext);
  const [searchQuery, setSearchQuery] = useState<SearchType>({
    position: "",
    sort: "",
    status: "",
    job_type: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [deleteJobID, setDeleteJob] = useState(false);
  const [resultFound, setResultFound] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [noOfPages, setNoOfPages] = useState(0);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { isSetOpen, isOpen, setEditFormData }: any =
    useContext(SidebarContext);
  const { name } = user?.user;
  const gotoPrevious = () => {
    setPage(Math.max(0, page - 1));
  };
  const gotoNext = () => {
    setPage(Math.min(noOfPages - 1, page + 1));
  };
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      setLoader((prev) => true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/jobs?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setLoader((prev) => false);
        setJob(response.data ?? []);
        setNoOfPages(response.data.totalPages);
      } catch (error) {
        console.error(error);
        setLoader(false);
      }
    };

    fetchData(); // Call the fetch data function
  }, [deleteJobID, page]);

  const deleteJob = async (id: number) => {
    setDeleteJob(false);
    if (name !== "aliraza") {
      try {
        ("");
        await axios.delete(`http://localhost:5000/api/v1/jobs/${id}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "application/json",
          },
        });
        // setToastMessage("Your message has been submitted!");
        // toast.success(toastMessage);
        showToast("Item deleted successfully", "warning");
        setDeleteJob(true);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    } else showToast("Demo User Unable to delete the job:");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setSearchQuery((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    // Debounced search function
    const debouncedSearch = setTimeout(() => {
      handleSearch();
    }, 500);

    // Cleanup function to cancel the debounce
    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [searchQuery, job, sortOrder]);

  const clearSearch = () => {
    setSearchQuery((prevData) => ({
      ...prevData,
      position: "",
      sort: "",
      status: "",
      job_type: "",
    }));
    // setEditData((prev: any) => ({
    //   ...prev,
    //   _id: "",
    // }));
  };
  const handleSortOrderChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setSortOrder(value);
  };

  const handleSearch = () => {
    // Perform search logic
    const filteredResults = job?.jobs?.filter((item: any) => {
      const matchesSearch =
        searchQuery?.position === "" ||
        item?.position
          .toLowerCase()
          .includes(searchQuery?.position.toLowerCase());
      const matchesStatus =
        searchQuery?.status === "all" ||
        item?.status.toLowerCase().includes(searchQuery?.status.toLowerCase());
      const matchesJobTypes =
        searchQuery?.job_type === "all" ||
        item?.job_type
          .toLowerCase()
          .includes(searchQuery.job_type.toLowerCase());
      return matchesSearch && matchesStatus && matchesJobTypes;
    });

    const sortedResults: any = [...filteredResults];

    const sortedResultsnew: any = sortedResults?.sort((a: any, b: any) => {
      if (sortOrder === "ascending") {
        return a.position.localeCompare(b.position);
      } else if (sortOrder === "latest") {
        return a.createdAt - b.createdAt;
      } else if (sortOrder === "oldest") {
        return b.createdAt - a.createdAt;
      } else {
        return b.position.localeCompare(a.position);
      }
    });
    if (sortedResultsnew) {
      setSearchResults(sortedResultsnew);
    }
    return setResultFound("sorry no result found...");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    clearSearch();
  };

  const editJob = (data: Props) => {
    navigate("/add-jobs");
  };
  const changePage = (ident: any) => {
    setPage(ident);
  };
  const pageNumber = new Array(noOfPages).fill(null).map((v, i) => {
    return (
      <div
        className={`
        cursor-pointer relative z-10 inline-flex items-center bg-grey-700 px-4 py-2 text-sm font-semibold text-black focus:z-20 border  border-black-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        bg-${page === i ? "blue" : "red"}-500 `}
        onClick={() => changePage(i)}
        key={i}
      >
        {i + 1}
      </div>
    );
  });

  return (
    <>
      <div
        className={` shadow appearance-none border rounded mx-8 my-4 p-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
          !isOpen
            ? "bg-white rounded-md  shadow-lg p-2"
            : "bg-white rounded-md  shadow-lg p-4 pl-16"
        }`}
      >
        <p className="ml-20 mt-3 text-3xl">Search Form</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-2 justify-start mx-20 my-8"
        >
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="position"
            >
              Position
            </label>
            <input
              className={` shadow appearance-none border rounded h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              id="position"
              type="text"
              placeholder="position"
              value={searchQuery?.position}
              onChange={handleChange}
              name="position"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              id="status"
              className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              name="status"
              placeholder="status"
              value={searchQuery?.status}
              onChange={handleChange}
            >
              <option value="all">all</option>
              <option value="interview">interview</option>
              <option value="declined">declined</option>
              <option value="pending">pending</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <select
              id="job_type"
              className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              name="job_type"
              value={searchQuery?.job_type}
              onChange={handleChange}
            >
              <option value="all">all</option>
              <option value="full time">full-time</option>
              <option value="part time">part-time</option>
              <option value="remote">remote</option>
              <option value="internship">internship</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="sort"
            >
              Sort
            </label>
            <select
              id="sort"
              className={`shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              name="sort"
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <option value="latest">latest</option>
              <option value="oldest">oldest</option>
              <option value="ascending">a-z</option>
              <option value="decending">z-a</option>
            </select>
          </div>
          <button
            type="submit"
            className={`{
          bg-red-200  h-10 mt-7 hover:bg-red-900 hover:text-white font-medium  rounded" ${
            !isOpen ? "w-80 rounded ml-1" : "w-96 rounded "
          }`}
            onClick={clearSearch}
          >
            Clear Filters
          </button>
        </form>
      </div>
      <div>
        {loader ? (
          //  space-x-2 animate-pulse
          <div className="flex justify-center items-center h-56">
            <div
              className="  inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : searchResults.length ? (
          <GetJob
            searchResults={searchResults}
            deleteJob={deleteJob}
            editJob={editJob}
            pageNumber={pageNumber}
            setPage={setPage}
            gotoNext={gotoNext}
            gotoPrevious={gotoPrevious}
            job={job}
          />
        ) : (
          <div className="flex justify-center items-center h-56">
            {" "}
            {resultFound}
            {/* <p className=""> sorry no result found...</p> */}
          </div>
        )}
      </div>
    </>
  );
}

export default AllJobs;
