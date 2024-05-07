import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  const {
    description = "No data",
    urls: { small },
  } = image;

  return (
    <div className={css.imageBox}>
      <img
        className={css.image}
        src={small}
        alt={description}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;

ImageCard.propTypes = {
  image: PropTypes.shape({
    description: PropTypes.string,
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
