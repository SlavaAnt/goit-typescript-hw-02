import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn = ({ onLoadMore }: LoadMoreBtnProps) => {
  return (
    <div className={css.btnLoadMore}>
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = { onLoadMore: PropTypes.func.isRequired };
