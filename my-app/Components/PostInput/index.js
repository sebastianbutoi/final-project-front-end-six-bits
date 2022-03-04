import { useState } from "react";
import css from "../../styles/signedInProfile.module.css";

const URL = process.env.NEXT_PUBLIC_API_URL;
const PostInput = ({ user }) => {
  const [formData, setFormData] = useState({
    user_id: 1,
    title: "",
    description: "",
    location: "",
    free: null,
    price: 0,
    date: "",
  });

  const { title, description, location, price, date } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    async function postData() {
      const response = await fetch(`${URL}/posts`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(formData),
      });
      const responseMessage = await response.json();
      console.log(responseMessage);
    }
    postData();
  };

  // function calculateDate() {
  //   const today = new Date();
  //   const dd = String(today.getDate());
  //   const mm = String(today.getMonth() + 1);
  //   const yyyy = today.getFullYear();
  //   return dd + "/" + mm + "/" + yyyy;
  // }

  return (
    <div className={css.container}>
      <div className={css.postInput}>
        <p className={css.inputTitle}>
          Name: {user[0].first_name} {""}
          {user[0].last_name}
        </p>
        <p className={css.inputTitle}>Email: {user[0].email}</p>
        <form onSubmit={onSubmit}>
          <div className={css.inputContainer}>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              placeholder="Title"
              autoComplete="off"
              onChange={onChange}
            ></input>
          </div>{" "}
          <br />
          <br />
          <div className={css.inputContainer}>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              placeholder="Description"
              autoComplete="off"
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <div className={css.inputContainer}>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              placeholder="Location"
              autoComplete="off"
              onChange={onChange}
            ></input>
          </div>
          <br />
          <br />
          <input
            type="radio"
            id="false"
            name="free"
            value="false"
            onChange={onChange}
          />
           <label htmlFor="free">false</label>
          <input
            type="radio"
            id="true"
            name="free"
            value="true"
            onChange={onChange}
          />
           <label htmlFor="free">true</label>
          <br />
          <br />
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            placeholder="Enter the price"
            onChange={onChange}
          ></input>
          <br />
          <br />
          <label htmlFor="start">Start date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            min="2018-01-01"
            max="2022-12-31"
            onChange={onChange}
          />{" "}
          <br />
          <br />
          <button type="submit">Post data</button>
        </form>
      </div>
      <div className={css.postDisplay}> Posts will go here</div>
    </div>
  );
};

export default PostInput;
