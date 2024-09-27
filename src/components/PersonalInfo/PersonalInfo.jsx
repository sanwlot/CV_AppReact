export default function PersonalInfo({
  name,
  email,
  phone,
  handleChangePersonalInfo,
}) {
  return (
    <section className="personalInfo">
      <h2>Personal Information</h2>
      <div>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChangePersonalInfo}
        />
        <button type="button">Edit</button>
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangePersonalInfo}
        />
        <button type="button">Edit</button>
      </div>
      <div>
        <label htmlFor="phone">Phone </label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChangePersonalInfo}
        />
        <button type="button">Edit</button>
      </div>
    </section>
  )
}
