import img1 from "../assets/images/image-1.png";
import img2 from "../assets/images/image-2.png";
import img3 from "../assets/images/image-3.png";
import img4 from "../assets/images/image-4.png";
import img5 from "../assets/images/image-5.png";
import img6 from "../assets/images/image-6.png";
import img7 from "../assets/images/image-7.png";
import img8 from "../assets/images/image-8.webp";
import img9 from "../assets/images/image-9.webp";
import img10 from "../assets/images/image-10.jpeg";
import img11 from "../assets/images/image-11.jpeg";
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ImageGalleryContext = createContext();

export const useImageGalleryContext = () => {
  return useContext(ImageGalleryContext);
};

export const ImageGalleryProvider = ({ children }) => {
  const [totalSelected, setTotalSelected] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);
  const initialImages = [
    { id: 1, image: img1, selected: false },
    { id: 2, image: img2, selected: false },
    { id: 7, image: img3, selected: false },
    { id: 3, image: img4, selected: false },
    { id: 4, image: img5, selected: false },
    { id: 5, image: img6, selected: false },
    { id: 6, image: img7, selected: false },
    { id: 8, image: img8, selected: false },
    { id: 9, image: img9, selected: false },
    { id: 10, image: img10, selected: false },
    { id: 11, image: img11, selected: false },
  ];

  const [images, setImages] = useState(initialImages);

  const handleMouseEnter = (imageId) => {
    setHoveredImage(imageId);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const toggleImageSelection = (imageId) => {
    const updatedImages = images.map((image) =>
      image.id === imageId ? { ...image, selected: !image.selected } : image
    );
    setImages(updatedImages);
    const selectedCount = updatedImages.filter(
      (image) => image.selected
    ).length;
    setTotalSelected(selectedCount);
  };

  const deleteSelectedImages = () => {
    const updatedImages = images.filter((image) => !image.selected);
    setImages(updatedImages);
    setTotalSelected(0);
  };

  const minId = Math.min(...images.map((image) => image.id));

  const contextValue = {
    totalSelected,
    hoveredImage,
    images,
    handleMouseEnter,
    handleMouseLeave,
    toggleImageSelection,
    deleteSelectedImages,
    minId,
  };

  return (
    <ImageGalleryContext.Provider value={contextValue}>
      {children}
    </ImageGalleryContext.Provider>
  );
};

ImageGalleryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
