import { useState } from "react"

export default function SkillsInfo({ addSkills }) {
  const [skill, setSkill] = useState("")
  return (
    <section>
      <h2>SKILLS</h2>
      <input
        type="text"
        placeholder="skills"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          addSkills(skill)
          setSkill("")
        }}
      >
        Add Skills
      </button>
    </section>
  )
}
