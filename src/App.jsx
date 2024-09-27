import { useState } from "react"
import "./App.css"
import Form from "./components/Form/Form"
import CV from "./components/CV/CV"

function App() {
  const [cv, setCV] = useState({
    personalInfo: {
      name: "Your Name",
      email: "example@gmail.com",
      phone: "1234567890",
    },
    educationInfo: {
      titleOfStudy: "Course Name",
      dateOfStudy: "2020",
      instituteName: "University/Institute Name",
    },

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
  })

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
      />
      <CV cv={cv} />
    </div>
  )
}

export default App
