import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image, ModalData } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: ModalData) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <>
      <ul className={css.imageContainer}>
        {images.map((image) => {
          return (
            <li className={css.imageCard} key={image.id}>
              <ImageCard image={image} onImageClick={onImageClick} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onImageClick: PropTypes.func.isRequired,
};
