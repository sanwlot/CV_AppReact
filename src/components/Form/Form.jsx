import PersonalInfo from "../PersonalInfo/PersonalInfo"
import EducationInfo from "../EducationInfo/EducationInfo"
import ExpInfo from "../ExpInfo/ExpInfo"
export default function Form({
  cv,
  handleChangePersonalInfo,
  handleChangeEducationInfo,
  handleAddExpBtn,
}) {
  return (
    <form className="form">
      <div className="formSections">
        <PersonalInfo
          {...cv.personalInfo}
          handleChangePersonalInfo={handleChangePersonalInfo}
        />
        <EducationInfo
          {...cv.educationInfo}
          handleChangeEducationInfo={handleChangeEducationInfo}
        />
        <ExpInfo handleAddExpBtn={handleAddExpBtn} />
      </div>
    </form>
  )
}
