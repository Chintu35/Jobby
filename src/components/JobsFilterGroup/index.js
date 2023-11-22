import './index.css'

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const JobsFilterGroup = props => {
  const {clickedType, clickedRadio} = props

  const onChangeType = event => {
    clickedType(event.target.id)
  }

  const onClickRadio = event => {
    clickedRadio(event.target.id)
  }

  return (
    <div className="filter-container">
      <h1 className="header">Type of Employment</h1>
      {employmentTypesList.map(eachType => (
        <div key={eachType.employmentTypeId} className="checkbox-container">
          <input
            onClick={onChangeType}
            id={eachType.employmentTypeId}
            type="checkbox"
            className="checkbox-item"
          />
          <label className="label-name" htmlFor={eachType.employmentTypeId}>
            {eachType.label}
          </label>
        </div>
      ))}
      <hr className="line" />
      <h1 className="header">Salary Range</h1>
      {salaryRangesList.map(salaryRange => (
        <div key={salaryRange.salaryRangeId} className="checkbox-container">
          <input
            name="salaryRange"
            onClick={onClickRadio}
            id={salaryRange.salaryRangeId}
            type="radio"
            className="checkbox-item"
          />
          <label className="label-name" htmlFor={salaryRange.salaryRangeId}>
            {salaryRange.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default JobsFilterGroup
