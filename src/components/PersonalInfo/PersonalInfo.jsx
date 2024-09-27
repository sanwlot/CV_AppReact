export default function PersonalInfo({
  name,
  email,
  phone,
  handleChangePersonalInfo,
}) {
  return (
    <section className="personalInfo">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label htmlFor="name">Name </label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChangePersonalInfo}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email </label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangePersonalInfo}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone </label>
        <input
          className="form-control"
          type="number"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChangePersonalInfo}
        />
      </div>
    </section>
  )
}
