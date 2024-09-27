export default function EducationInfo({
  titleOfStudy,
  dateOfStudy,
  instituteName,
  handleChangeEducationInfo,
}) {
  return (
    <section className="educationInfo">
      <h2>Education Information</h2>
      <div className="form-group">
        <label htmlFor="titleOfStudy">Title of Study </label>
        <input
          className="form-control"
          type="text"
          id="titleOfStudy"
          name="titleOfStudy"
          value={titleOfStudy}
          onChange={handleChangeEducationInfo}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfStudy">Date of Study </label>
        <input
          className="form-control"
          type="date"
          id="dateOfStudy"
          name="dateOfStudy"
          value={dateOfStudy}
          onChange={handleChangeEducationInfo}
        />
      </div>
      <div className="form-group">
        <label htmlFor="instituteName">Institute Name </label>
        <input
          className="form-control"
          type="text"
          id="instituteName"
          name="instituteName"
          value={instituteName}
          onChange={handleChangeEducationInfo}
        />
      </div>
    </section>
  )
}
