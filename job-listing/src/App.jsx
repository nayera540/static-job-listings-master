import JobsList from "./components/JobsList/JobsList";

const initialState = {
    role: null,
    level: null,
    tools: [],
    languages: [],
    filteredItems: [],
};

function filterReducer(state, action) {
    switch (action.type) {
        case "Add_Filter":
            return;
        case "Remove_Filter":
            return;
        case "Clear_Filter":
            return;
        default:
            throw new Error("Something went wrong!!");
    }
}

function App() {
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
                <JobsList />
            </div>
        </>
    );
}

export default App;
