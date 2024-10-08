import { useState } from "react"
import "./App.css"
import Form from "./components/Form/Form"
import CV from "./components/CV/CV"
import { useEffect } from "react"

export default function App() {
  const [cv, setCV] = useState(
    JSON.parse(localStorage.getItem("CV")) || {
      personalInfo: {
        name: "Your Name",
        email: "example@gmail.com",
        phone: "1234567890",
        address: "Jaipur",
        linkedIn: "",
      },
      educationInfo: {
        titleOfStudy: "Course Name",
        dateOfStudy: "2020",
        instituteName: "University/Institute Name",
      },
      skillsInfo: [],
      languagesInfo: [],

      expInfo: [
        {
          companyName: "Company Name",
          positionTitle: "Job Title",
          responsibilites: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde, sit maxime quaerat facere magnam voluptatum.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde, sit maxime quaerat facere magnam voluptatum.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde, sit maxime quaerat facere magnam voluptatum.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde, sit maxime quaerat facere magnam voluptatum.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde, sit maxime quaerat facere magnam voluptatum.",
          ],
          dateFrom: "2020",
          dateUntil: "2022",
        },
      ],
    }
  )
  useEffect(() => {
    localStorage.setItem("CV", JSON.stringify(cv))
  }, [cv])
  function addSkills(skill) {
    setCV({ ...cv, skillsInfo: [...cv.skillsInfo, skill] })
  }
  function addLanguages(language) {
    setCV({ ...cv, languagesInfo: [...cv.languagesInfo, language] })
  }

  function handleChangePersonalInfo(e) {
    const { name, value } = e.target
    setCV({
      ...cv,
      personalInfo: {
        ...cv.personalInfo,
        [name]: value,
      },
    })
  }
  function handleChangeEducationInfo(e) {
    const { name, value } = e.target
    setCV({
      ...cv,
      educationInfo: {
        ...cv.educationInfo,
        [name]: value,
      },
    })
  }
  function handleAddExpBtn(exp) {
    setCV({ ...cv, expInfo: [...cv.expInfo, exp] })
  }
  return (
    <div className="appContainer container">
      <h1 style={{ textAlign: "center" }}>CV APP</h1> <hr />
      <Form
        cv={cv}
        handleChangeEducationInfo={handleChangeEducationInfo}
        handleChangePersonalInfo={handleChangePersonalInfo}
        handleAddExpBtn={handleAddExpBtn}
        addLanguages={addLanguages}
        addSkills={addSkills}
      />
      <CV cv={cv} />
    </div>
  )
}
