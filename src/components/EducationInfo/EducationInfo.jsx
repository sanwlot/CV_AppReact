export default function EducationInfo({
  titleOfStudy,
  dateOfStudy,
  instituteName,
  handleChangeEducationInfo,
}) {
  return (
    <section className="educationInfo">
      <h2>Education Information</h2>
      <div>
        <label htmlFor="titleOfStudy">Title of Study </label>
        <input
          type="text"
          id="titleOfStudy"
          name="titleOfStudy"
          value={titleOfStudy}
          onChange={handleChangeEducationInfo}
        />
        <button type="button">Edit</button>
      </div>
      <div>
        <label htmlFor="dateOfStudy">Date of Study </label>
        <input
          type="date"
          id="dateOfStudy"
          name="dateOfStudy"
          value={dateOfStudy}
          onChange={handleChangeEducationInfo}
        />
        <button type="button">Edit</button>
      </div>
      <div>
        <label htmlFor="instituteName">Institute Name </label>
        <input
          type="text"
          id="instituteName"
          name="instituteName"
          value={instituteName}
          onChange={handleChangeEducationInfo}
        />
        <button type="button">Edit</button>
      </div>
    </section>
  )
}
