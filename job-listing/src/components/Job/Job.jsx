import "./Job.css";

function Job({ job }) {
    return (
        <div className={`bg-white container flex flex-col md:flex-row mb-6 md:max-w-[1000px] max-w-[500px] shadow-shadow shadow-lg p-6 px-8 rounded-md ${job.featured && "border-l-[5px] border-l-Desaturated-Dark-Cyan"}`}>
            <img src={job.logo} alt={`${job.company} logo`} className="max-w-[88px] max-h-[88px] mt-1" />
            <div className="flex md:justify-between md:flex-row flex-col flex-grow">
                <div className="details flex flex-col mt-2 ml-4">
                    <div className="flex flex-row mb-1 gap-2">
                        <p className="mr-2 text-Desaturated-Dark-Cyan font-bold">{job.company}</p>
                        {job.new && <span className="uppercase bg-Desaturated-Dark-Cyan font-semibold pt-1 text-sm text-white rounded-2xl h-6 w-12 text-center">new!</span>}
                        {job.featured && <span className="uppercase text-sm h-6 pt-1 font-semibold rounded-2xl w-20 justify-center content-center text-center bg-Very-Dark-Grayish-Cyan text-white">featured</span>}
                    </div>
                    <div className="mb-1">
                        <h1 className="text-xl text-Very-Dark-Grayish-Cyan font-bold hover:text-Desaturated-Dark-Cyan hover:cursor-pointer duration-200">{job.position}</h1>
                    </div>
                    <ul
                        role="list"
                        className="spaced-markers flex flex-row gap-2 list-disc text-Dark-Grayish-Cyan"
                    >
                        <li className="first:list-none mr-4">{job.postedAt}</li>
                        <li className="mr-4">{job.contract}</li>
                        <li className="mr-4">{job.location}</li>
                    </ul>
                </div>
                <div className="features flex content-center flex-wrap items-center justify-start md:justify-end gap-4">
                    <button>{job.role}</button>
                    <button>{job.level}</button>
                    {job.tools.map((tool) => (
                        <button key={tool}>{tool}</button>
                    ))}
                    {job.languages.map((lang) => (
                        <button key={lang}>{lang}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Job;
