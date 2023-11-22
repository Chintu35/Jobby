import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content-container">
        <h1 className="head">Find The Job Thats Fits Your Life</h1>
        <p className="para">
          Millions of people are searching for jobs,salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <button type="button" className="find-button">
          Find Jobs
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-bg.png"
        alt="home-logo"
        className="home-logo"
      />
    </div>
  </>
)

export default Home
