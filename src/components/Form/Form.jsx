import PersonalInfo from "../PersonalInfo/PersonalInfo"
import EducationInfo from "../EducationInfo/EducationInfo"
import ExpInfo from "../ExpInfo/ExpInfo"
import SkillsInfo from "../SkillsInfo/SkillsInfo"
import LanguagesInfo from "../LanguagesInfo/LanguagesInfo"
export default function Form({
  cv,
  handleChangePersonalInfo,
  handleChangeEducationInfo,
  handleAddExpBtn,
  addSkills,
  addLanguages,
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
        <SkillsInfo addSkills={addSkills} />
        <LanguagesInfo addLanguages={addLanguages} />
        <ExpInfo handleAddExpBtn={handleAddExpBtn} />
      </div>
    </form>
  )
}
