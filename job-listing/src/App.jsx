import JobsList from "./components/JobsList/JobsList";
import Filter from "./components/Filter/Filter";
import jobs from "../public/data.json";
import { useReducer } from "react";

const initialState = {
    filteredItems: [],
    allJobs: jobs,
    jobs: jobs,
};

function filterReducer(state, action) {
    switch (action.type) {
        case "Add_Filter": {
            const isFilteredItemExists = state.filteredItems.some(
                (item) =>
                    item.value === action.payload.value &&
                    item.category === action.payload.category
            );
            const updateFilterItems = isFilteredItemExists
                ? state.filteredItems
                : [...state.filteredItems, action.payload];

            return {
                ...state,
                jobs: state.jobs.filter((job) => {
                    if (action.payload.category === "role") {
                        return job.role === action.payload.value;
                    }
                    if (action.payload.category === "level") {
                        return job.level === action.payload.value;
                    }
                    if (action.payload.category === "tools") {
                        return job.tools && job.tools.some((tool) => tool === action.payload.value);
                    }
                    if (action.payload.category === "languages") {
                        return job.languages && job.languages.some((lang) => lang === action.payload.value);
                    }
                }),
                filteredItems: updateFilterItems,
            };
        }

        case "Remove_Filter": {
            const updatedFilterItems = state.filteredItems.filter(
                (item) => !(item.category === action.payload.category && item.value === action.payload.value)
            );

            if (updatedFilterItems.length === 0) {
                return {
                    ...state,
                    jobs: state.allJobs, 
                    filteredItems: updatedFilterItems,
                };
            }

            const filteredJobs = state.allJobs.filter((job) => {
                return updatedFilterItems.every((filter) => {
                    if (filter.category === "role") {
                        return job.role === filter.value;
                    }
                    if (filter.category === "level") {
                        return job.level === filter.value;
                    }
                    if (filter.category === "tools") {
                        return job.tools && job.tools.some((tool) => tool === filter.value);
                    }
                    if (filter.category === "languages") {
                        return job.languages && job.languages.some((lang) => lang === filter.value);
                    }
                    return true;
                });
            });

            return {
                ...state,
                jobs: filteredJobs, 
                filteredItems: updatedFilterItems,
            };
        }


        case "Clear_Filter":
            return { ...initialState };
        default:
            throw new Error("Something went wrong!!");
    }
}

function App() {
    const [{ jobs, filteredItems }, dispatch] = useReducer(
        filterReducer,
        initialState
    );

    return (
        <>
            <div>
                <img
                    src="images/bg-header-desktop.svg"
                    alt="desktop pattern"
                    className="w-full max-h-40 bg-Desaturated-Dark-Cyan"
                />
            </div>
            <div className="md:max-w-[1040px] max-w-[510px] w-full mx-auto p-[20px]">
                {filteredItems.length > 0 && (
                    <Filter filteredItems={filteredItems} dispatch={dispatch} />
                )}
                <JobsList jobs={jobs} dispatch={dispatch} isFiltered={filteredItems.length > 0} />
            </div>
        </>
    );
}

export default App;
