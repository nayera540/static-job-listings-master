function Filter({ dispatch, filteredItems }) {
    return (
        <div className="bg-white flex flex-wrap max-w-[1000px] shadow-shadow shadow-lg rounded-md p-4 relative -top-10">
            {filteredItems.map((item) => (
                <div key={item} className="filters">
                    <p>{item.value}</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                            <path
                                fill="#FFF"
                                fill-rule="evenodd"
                                d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                            />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Filter;
