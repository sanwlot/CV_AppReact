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
      <div className="form-group">
        <label htmlFor="companyName">Company Name </label>
        <input
          className="form-control"
          type="text"
          id="companyName"
          name="companyName"
          value={exp.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="positionTitle">Position Titile </label>
        <input
          className="form-control"
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={exp.positionTitle}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="responsibilites">Responsibilites </label>
        <input
          className="form-control"
          type="text"
          id="responsibilites"
          name="responsibilites"
          onChange={(e) => setResponsibility(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => handleAddResponsibilitesBtn(responsibility)}
        >
          Add
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="dateFrom">Date from </label>
        <input
          className="form-control"
          type="date"
          id="dateFrom"
          name="dateFrom"
          value={exp.dateFrom}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateUntil">Date Until </label>
        <input
          className="form-control"
          type="date"
          id="dateUntil"
          name="dateUntil"
          value={exp.dateUntil}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => handleAddExpBtn(exp)}
      >
        Add Work Experience
      </button>
    </section>
  )
}
