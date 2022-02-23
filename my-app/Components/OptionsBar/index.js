import css from "../../styles/optionsbar.module.css";

function OptionsBar() {
  return (
    <div className={css.options}>
      <p>Location</p>
      <p>All</p>
      <p>For Sale</p>
      <p>For Free</p>
      <button>Add Post</button>
    </div>
  );
}

export default OptionsBar;
