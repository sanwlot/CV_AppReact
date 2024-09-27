import { useState } from "react"

export default function LanguagesInfo({ addLanguages }) {
  const [language, setLanguage] = useState("")
  return (
    <section>
      <h2>LANGUAGES</h2>
      <input
        type="text"
        placeholder="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          addLanguages(language)
          setLanguage("")
        }}
      >
        Add Language
      </button>
    </section>
  )
}
