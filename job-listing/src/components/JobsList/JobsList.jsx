import Job from '../Job/Job';
import './JobsList.css'

function JobsList({jobs, dispatch, isFiltered}) {
    return (
        <div className={`${isFiltered? "mt-2":"mt-14"}`}>
            {jobs.map((job) => (
                <Job job={job} key={job.id} dispatch={dispatch}/>
            ))}
        </div>
    )
}

export default JobsList
