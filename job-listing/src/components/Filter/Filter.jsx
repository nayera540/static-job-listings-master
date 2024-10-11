function Filter({ dispatch, filteredItems }) {
    return (
        <div className="bg-white flex flex-wrap justify-between max-w-[1000px] shadow-shadow shadow-lg rounded-md p-4 relative -top-10">
            <div className="flex flex-wrap">
                {filteredItems.map((item) => (
                    <div key={`${item.category}-${item.value}`} className="filters flex flex-row mr-3 mb-2">
                        <p className="text-Desaturated-Dark-Cyan font-bold text-center grid px-2 justify-center content-center bg-Light-Grayish-Cyan-Filter h-8 rounded-l-md">
                            {item.value}
                        </p>
                        <button
                            className="bg-Desaturated-Dark-Cyan h-8 w-7 hover:bg-Very-Dark-Grayish-Cyan duration-300 grid justify-center content-center rounded-r-md"
                            onClick={() => dispatch({ type: "Remove_Filter", payload: { category: item.category, value: item.value } })}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                                <path
                                    fill="#FFF"
                                    fillRule="evenodd"
                                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            <div className="self-center">
                <button
                    onClick={() => dispatch({ type: "Clear_Filter" })}
                    className="text-Dark-Grayish-Cyan font-semibold hover:underline hover:text-Desaturated-Dark-Cyan"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default Filter;
