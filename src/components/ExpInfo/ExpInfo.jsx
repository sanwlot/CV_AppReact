import { useState } from "react"

export default function ExpInfo({ handleAddExpBtn }) {
  const [exp, setExp] = useState({
    companyName: "",
    positionTitle: "",
    responsibilites: [],
    dateFrom: "",
    dateUntil: "",
  })
  const [responsibility, setResponsibility] = useState("")

  function handleAddResponsibilitesBtn(responsibility) {
    setExp({
      ...exp,
      responsibilites: [...exp.responsibilites, responsibility],
    })
  }
  function handleChange(e) {
    const { name, value } = e.target
    setExp({
      ...exp,
      [name]: value,
    })
  }

  return (
    <section className="expInfo">
      <h2>Professional Experience</h2>
      <div>
        <label htmlFor="companyName">Company Name </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={exp.companyName}
          onChange={handleChange}
        />
        <button type="button">Edit</button>
      </div>
      <div>
        <label htmlFor="positionTitle">Position Titile </label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={exp.positionTitle}
          onChange={handleChange}
        />
        <button type="button">Edit</button>
      </div>
      <div>
        <label htmlFor="responsibilites">Responsibilites </label>
        <input
          type="text"
          id="responsibilites"
          name="responsibilites"
          onChange={(e) => setResponsibility(e.target.value)}
        />
        <button
          type="button"
          onClick={() => handleAddResponsibilitesBtn(responsibility)}
        >
          Add
        </button>
        <button type="button">Clear</button>
        <div>
          <label htmlFor="dateFrom">Date from </label>
          <input
            type="date"
            id="dateFrom"
            name="dateFrom"
            value={exp.dateFrom}
            onChange={handleChange}
          />
          <button type="button">Edit</button>
        </div>
        <div>
          <label htmlFor="dateUntil">Date Until </label>
          <input
            type="date"
            id="dateUntil"
            name="dateUntil"
            value={exp.dateUntil}
            onChange={handleChange}
          />
          <button type="button">Edit</button>
        </div>
        <button type="button" onClick={() => handleAddExpBtn(exp)}>
          Add Work Experience
        </button>
      </div>
    </section>
  )
}
