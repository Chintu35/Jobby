import './index.css'
import {FaStar} from 'react-icons/fa'
import {TiLocation} from 'react-icons/ti'
import {IoBagHandle} from 'react-icons/io5'

const JobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    title,
    rating,
    location,
    jobDescription,
    packagePerAnnum,
  } = jobDetails

  return (
    <li className="job-container">
      <div className="title-box-container">
        <img src={companyLogoUrl} alt="companyUrl" className="company-url" />
        <div className="title-container">
          <h1 className="title">{title}</h1>
          <p className="rating">
            <span>
              <FaStar className="star-icon" />
            </span>
            {rating}
          </p>
        </div>
      </div>
      <div className="middle-container">
        <div className="middle">
          <TiLocation className="icon" />
          <p className="para">{location}</p>
          <IoBagHandle className="icon" />
          <p className="para">{employmentType}</p>
        </div>
        <p className="salary">{packagePerAnnum}</p>
      </div>
      <hr className="line" />
      <div className="footer-container">
        <h1 className="description-title">Description</h1>
        <p className="description">{jobDescription}</p>
      </div>
    </li>
  )
}

export default JobItem
