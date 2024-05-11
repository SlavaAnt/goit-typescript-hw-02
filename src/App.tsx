import { useState, useEffect } from "react";
import { requestImages } from "./request-images-api";
import toast, { Toaster } from "react-hot-toast";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import "./index.css";
import { Image, ModalData, ResponseImageData } from "./types";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [btnLoadMore, setBtnLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalData>({
    likes: 0,
    alt_description: "",
    user: { name: "", bio: "", profile_image: { large: "" } },
    links: { html: "" },
    urls: {
      regular: "",
    },
  });

  const onSubmit = (inputValue: string): void => {
    setImages([]);
    setPage(1);
    setBtnLoadMore(false);
    setSearchQuery(inputValue);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  // Ефект при оновлені компоненту при зміні стану після сабміту форми
  useEffect(() => {
    if (!searchQuery.length) return;

    async function fetchImages() {
      try {
        setLoading(true);
        const data: ResponseImageData = await requestImages(searchQuery, page);

        if (!data.results.length) {
          toast(
            "Unfortunately, there are no images that match your request! Please try again!"
          );
        } else {
          setImages((previousImages) => [...previousImages, ...data.results]);

          if (data.total_pages > page) {
            setBtnLoadMore(true);
          } else {
            setBtnLoadMore(false);
            toast("These are all pictures that are found at your request!");
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [searchQuery, page]);

  // Modal
  function openModal(): void {
    setModalIsOpen(true);
  }

  function closeModal(): void {
    setModalIsOpen(false);
  }

  const onImageClick = (image: ModalData): void => {
    setModalImage(image);
    openModal();
  };

  return (
    <div className="container">
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-center" />

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {btnLoadMore && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {modalImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalImage={modalImage}
        />
      )}
    </div>
  );
}

export default App;
