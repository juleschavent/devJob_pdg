import "../../sass/sass_component/_jobList.scss"
// import "../../sass/sass_component/_jobList--dark.scss"
import Data from '../../assets/data.json'
import Import from '../../assets/Import'
import { Link } from 'react-router-dom'
import LoadMore from "./LoadMore";


const JobList = () => {

    console.log(Data)

    return (
        <>
            <main>
                {Data && Data.map((job, index) => (
                    <Link to={`/jobdetails/${job.id}`} key={index} style={{ textDecoration: "none" }}>
                        <div className="card">
                            <img src={Import(job.logo, "logo/")} alt={job.company} className="card__logo" />
                            <div className="addInfo">
                                <p className="addInfo__posted">{job.postedAt}</p>
                                <p className="addInfo__contract">{job.contract}</p>
                            </div>
                            <p className="card__position">{job.position}</p>
                            <p className="card__company">{job.company}</p>
                            <p className="card__location">{job.location}</p>
                        </div>
                    </Link>
                ))
                }
            </main>
            <LoadMore />
        </>
    );
}

export default JobList;