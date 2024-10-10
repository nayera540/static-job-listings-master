import JobsList from "./components/JobsList/JobsList";
import Filter from "./components/Filter/Filter";
import jobs from "../public/data.json";
import { useReducer } from "react";

const initialState = {
    filteredItems: [],
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
                    console.log(job);

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
        case "Remove_Filter":
            return;
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
