import {Component} from 'react'

import Header from '../header/header'

import './index.css'

class Home extends Component {
  navigateToJobs = () => {
    const {history} = this.props

    history.replace('/jobs')
  }

  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="content-container">
          <h1 className="first-head">Find The Job That Fits Your Life</h1>
          <p className="first-para">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <button
            type="button"
            className="jobs-button"
            onClick={this.navigateToJobs}
          >
            Find Jobs
          </button>
        </div>
      </div>
    )
  }
}
export default Home
