import "./index.css";

const SignUp2 = () => {
  return (
    <div className="signup2__main">
      <div className="signup2__container">
        <h3>Sign Up</h3>
        <form className="signup2__form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="DOB">Date Of Birth</label>
          <input type="date" id="DOB" name="DOB" />
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" />
          <label htmlFor="blood">Blood Group</label>
          <select name="blood" id="blood">
            <option value="o+">O+ve</option>
            <option value="o-">O-ve</option>
            <option value="A+">A+ve</option>
            <option value="A-">A-ve</option>
            <option value="B+">B+ve</option>
            <option value="B-">B-ve</option>
            <option value="AB+">AB+ve</option>
            <option value="AB-">AB-ve</option>
          </select>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="address">Address</label>
          <textarea name="address" id="address" cols="30" rows="10"></textarea>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp2;
