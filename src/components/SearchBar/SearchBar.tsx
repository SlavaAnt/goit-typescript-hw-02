import { Formik, Form, Field } from "formik";
import { FcSearch } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: { query: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    if (!values.query) {
      toast("Please enter your search!", {
        position: "top-right",
      });
      return;
    }
    onSubmit(values.query);
    resetForm();
  };

  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      <header className={css.header}>
        <h2 className={css.headerText}>
          Images from
          <a href="https://unsplash.com/" className={css.logo}>
            Unsplash
          </a>
        </h2>
        <Form className={css.headerForm}>
          <button className={css.btnSearch} type="submit">
            <FcSearch />
          </button>
          <Field
            className={css.headerInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
          />
        </Form>
        <Toaster />
      </header>
    </Formik>
  );
};

export default SearchBar;

SearchBar.propTypes = { onSubmit: PropTypes.func.isRequired };
