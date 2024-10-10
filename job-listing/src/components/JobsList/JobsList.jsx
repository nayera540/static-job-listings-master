import Job from '../Job/Job';
import './JobsList.css'
import jobs from '/public/data.json';

function JobsList() {
    return (
        <div className='mt-14'>
            {jobs.map((job) => (
                <Job job={job} key={job.id} />
            ))}
        </div>
    )
}

export default JobsList
