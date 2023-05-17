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
import { debounce } from "lodash";

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
  const [searchQuery, setSearchQuery] = useState<SearchType>({
    search: "",
    sort: "",
    status: "",
    job_type: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [deleteJobID, setDeleteJob] = useState(false);
  const navigate = useNavigate();
  const { isSetOpen, isOpen, setEditFormData }: any =
    useContext(SidebarContext);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/jobs");
        setJob(response.data ?? []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the fetch data function
  }, [deleteJobID]);

  const deleteJob = async (id: number) => {
    setDeleteJob(false);
    try {
      ("");
      await axios.delete(`http://localhost:5000/api/v1/jobs/${id}`);
      setDeleteJob(true);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  const handleChange = debounce(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setSearchQuery((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    },
    300
  );
  // const handleChange = debounce((name: keyof SearchQuery, value: string) => {
  //   setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
  // }, 300);

  // const handleInputChange = debounce((name, value) => {
  //   setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
  // }, 300);
  useEffect(() => {
    // Debounced search function
    const debouncedSearch = debounce(handleSearch, 300);

    // Call the debounced search function when searchQuery changes
    debouncedSearch();

    // Cleanup function to cancel the debounce
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery]);
  // console.log(job.jobs, "JOOOOOOOOOO");
  const handleSearch = () => {
    // Perform search logic
    // const filteredResults = job.jobs.filter((item: any) => {
    //   const matchesSearch =
    //     searchQuery.search === "" ||
    //     item.search.toLowerCase().includes(searchQuery.search.toLowerCase());
    // const matchesCategory =
    //   searchQuery.category === "" ||
    //   item.category
    //     .toLowerCase()
    //     .includes(searchQuery.category.toLowerCase());
    // const matchesLocation =
    //   searchQuery.location === "" ||
    //   item.location
    //     .toLowerCase()
    //     .includes(searchQuery.location.toLowerCase());
    // return matchesSearch;
    // return matchesName && matchesCategory && matchesLocation;
    // });
    // setSearchResults(filteredResults);
  };

  const editJob = (data: Props) => {
    navigate("/add-jobs");
  };

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
        <form className="flex flex-wrap gap-2 justify-start mx-20 my-8">
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="search"
            >
              Search
            </label>
            <input
              className={` shadow appearance-none border rounded h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ${
                !isOpen ? "w-80" : "w-96"
              }`}
              id="search"
              type="text"
              placeholder="search"
              value={searchQuery?.search}
              onChange={handleChange}
              name="search"
            />
            {/* onChange={(e) => handleChange("name", e.target.value)} */}
            {/*  */}
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
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
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
              value={searchQuery?.sort}
              onChange={handleChange}
            >
              <option value="latest">latest</option>
              <option value="oldest">oldest</option>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
            </select>
          </div>
          <button
            type="submit"
            className={`{
          bg-red-200  h-10 mt-7 hover:bg-red-900 hover:text-white font-medium  rounded" ${
            !isOpen ? "w-80 rounded ml-1" : "w-96 rounded "
          }`}
          >
            Clear Filters
          </button>
        </form>
      </div>
      <div>
        <GetJob job={job} deleteJob={deleteJob} editJob={editJob} />
      </div>
    </>
  );
}

export default AllJobs;
