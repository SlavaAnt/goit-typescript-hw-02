import { FcSearch } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const inputValue = evt.target.elements.data.value;

    if (!inputValue) {
      toast("You need to enter text to search for images!"),
        { position: "top-center" };
      return;
    }

    onSubmit(inputValue);

    evt.target.reset();
  };
  return (
    <header className={css.header}>
      <h2 className={css.headerText}>
        Images from
        <a href="https://unsplash.com/" className={css.logo}>
          Unsplash
        </a>
      </h2>
      <form onSubmit={handleSubmit} className={css.headerForm}>
        <input
          className={css.headerInput}
          type="text"
          placeholder="Search images and photos"
          name="data"
        />
        <button className={css.btnSearch} type="submit">
          <FcSearch />
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = { onSubmit: PropTypes.func.isRequired };
