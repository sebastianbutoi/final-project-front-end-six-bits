import { useState } from "react";

const ProfileInput = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phoneNumber: "",
  });

  const { firstName, secondName, phoneNumber } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <p>We need more information about you before creating a new post.</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          placeholder="Enter first name"
          onChange={onChange}
        ></input>{" "}
        <br />
        <br />
        <input
          type="text"
          id="secondName"
          name="secondName"
          value={secondName}
          placeholder="Enter second name"
          onChange={onChange}
        ></input>
        <br />
        <br />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          placeholder="Enter phone number"
          onChange={onChange}
        ></input>
        <br />
        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileInput;
