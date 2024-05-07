import { useEffect } from "react";
import { SlClose } from "react-icons/sl";
import Modal from "react-modal";

import css from "./ImageModal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, modalImage }) => {
  const {
    likes,
    alt_description,
    user: {
      name,
      bio,
      profile_image: { large },
    },
    links: { html },
    urls: { regular },
  } = modalImage;

  useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <div className={css.modal}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
        }}
      >
        <SlClose className={css.modalBtnClose} onClick={closeModal} />

        <div className={css.modalBox}>
          <div className={css.modalTextBox}>
            <a className={css.authorBox} href={html}>
              <img className={css.authorImage} src={large} alt={name} />
              <div className={css.authorBoxText}>
                <p>
                  Author name: <span className={css.modalText}>{name}</span>
                </p>

                <p>
                  Bio: <span className={css.modalText}>{bio}</span>
                </p>
              </div>
            </a>

            <div className={css.imageData}>
              <p>
                Description image:{" "}
                <span className={css.modalText}>{alt_description}</span>
              </p>
              <p>
                Likes: <span className={css.modalText}>{likes}</span>{" "}
              </p>
            </div>
          </div>

          <img className={css.image} src={regular} alt={alt_description} />
        </div>
      </Modal>
    </div>
  );
};
export default ImageModal;
