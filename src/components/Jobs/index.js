import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaSearch} from 'react-icons/fa'
import JobItem from '../JobItem'
import Profile from '../Profile'
import JobsFilterGroup from '../JobsFilterGroup'
import Header from '../Header'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  progress: 'INPROGRESS',
  success: 'INSUCCESS',
  failure: 'INFAILURE',
}

class Jobs extends Component {
  state = {
    apiStatus: apiConstants.initial,
    jobsData: [],
    salary: '',
    searchInput: '',
    employeeType: [],
  }

  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiConstants.progress})

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = 'https://apis.ccbp.in/jobs'

    const response = await fetch(apiUrl, options)

    const data = await response.json()

    if (response.ok === true) {
      const formattedData = data.jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))

      this.setState({jobsData: formattedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderJobsView = () => {
    const {jobsData} = this.state
    return (
      <ul className="jobs-list-container">
        {jobsData.map(eachJob => (
          <JobItem key={eachJob.id} jobDetails={eachJob} />
        ))}
      </ul>
    )
  }

  renderJobsViewFailure = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failuer-view"
      />
      <h1>Ooops! Something Went Wrong</h1>
      <p>We cant seem to find the page you are looking for.</p>
      <button type="button" className="try-button">
        Retry
      </button>
    </div>
  )

  renderJob = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.progress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderJobsView()
      case apiConstants.failure:
        return this.renderJobsViewFailure()
      default:
        return null
    }
  }

  clickedType = id => {
    this.setState(previousState => ({
      employeeType: [...previousState.employeeType, id],
    }))
  }

  clickedRadio = id => {
    const {salary} = this.state
    const data = String(salary)
    this.setState((salary: data))
  }

  render() {
    return (
      <>
        <Header className="header-container" />

        <div className="search-input-container">
          <input type="search" placeholder="search" className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <Profile className="profile-container" />
        <hr className="line" />
        <JobsFilterGroup
          clickedType={this.clickedType}
          clickedRadio={this.clickedRadio}
        />
        {this.renderJob()}
      </>
    )
  }
}

export default Jobs
