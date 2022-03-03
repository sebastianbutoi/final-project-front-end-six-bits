import { useState } from "react";

const PostInput = () => {
  const [formData, setFormData] = useState({
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
    console.log(formData);
  };

  return (
    <div>
      <p>Name: </p>
      <p>Email: </p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="Enter the title"
          onChange={onChange}
        ></input>{" "}
        <br />
        <br />
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          placeholder="Enter description"
          onChange={onChange}
        ></input>
        <br />
        <br />
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          placeholder="Enter the location"
          onChange={onChange}
        ></input>
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
  );
};

export default PostInput;
