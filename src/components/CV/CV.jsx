import EmailIcon from "@mui/icons-material/Email"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
export default function CV({ cv }) {
  return (
    <main className="container">
      <section className="leftPanel">
        <div className="personalDetails">
          <div>
            <h1>{cv.personalInfo.name}</h1>
            <p>Web Developer</p>
          </div>
          <div>
            <p>
              <EmailIcon /> <span>{cv.personalInfo.email}</span>
            </p>
            <p>
              <LocalPhoneIcon /> <span>{cv.personalInfo.phone}</span>
            </p>
            <p>
              <LocationOnIcon /> <span>Jodhpur, Rajasthan</span>
            </p>
            <p>
              <LinkedInIcon /> <a href="#">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="educationDetails">
          <h2>EDUCATION</h2>
          <div>
            <p>{cv.educationInfo.titleOfStudy}</p>
            <p>{cv.educationInfo.instituteName}</p>
            <p>
              <CalendarMonthIcon />
              <span>2020-2024</span>
            </p>
          </div>
        </div>
        <div className="skillsDetails">
          <h2>SKILLS</h2>
          <ul>
            {cv.skillsInfo.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="langDetails">
          <h2>LANGUAGES</h2>
          <ul>
            {cv.languagesInfo.map((language, i) => (
              <li key={i}>{language}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="rightPanel">
        <h2>WORK EXPERIENCE</h2>
        <div className="allExp">
          {cv.expInfo.map((exp, i) => (
            <div key={i} className="experienceDetails">
              <p className="jobTitle">{exp.positionTitle}</p>
              <p className="companyName">{exp.companyName}</p>
              <div>
                <CalendarMonthIcon />{" "}
                <span>
                  from: {exp.dateFrom} to: {exp.dateUntil}
                </span>
              </div>
              <ul>
                {exp.responsibilites.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
