import "./Job.css";

function Job({ job }) {
    return (
        <div className={`bg-white container flex flex-col md:flex-row md:mb-6 mb-10 md:max-w-[1000px] max-w-[500px] shadow-shadow shadow-lg p-6 px-8 rounded-md ${job.featured && "border-l-[5px] border-l-Desaturated-Dark-Cyan"}`}>
            <img src={job.logo} alt={`${job.company} logo`} className="md:max-w-[88px] md:max-h-[88px] mt-1 max-h-[60px] max-w-[60px] md:top-0 md:left-0 relative -top-12 -left-3" />
            <div className="flex md:justify-between md:flex-row flex-col flex-grow -ml-3 -mt-9 md:ml-0 md:mt-0">
                <div className="details flex flex-col md:mt-2 md:ml-4 mb-5 border-b border-b-Dark-Grayish-Cyan border-solid pb-4 md:pb-0 md:border-0 md:mb-0">
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
