import { FaCheckSquare, FaImage, FaSquare } from "react-icons/fa";
import { useImageGalleryContext } from "../../contexts/ImageGalleryContext";
import "./animation.css";
const Gallery = () => {
  const {
    hoveredImage,
    images,
    handleMouseEnter,
    handleMouseLeave,
    handleAddImage,
    toggleImageSelection,
    minId,
  } = useImageGalleryContext();

  const selectedImageBg = {
    background: "rgba(206, 208, 212, 0.4)",
  };
  const hoveredImageBg = {
    background: "rgba(130, 130, 130, 0.7)",
  };
  return (
    <>
      {images.map((image) => (
        <div
          onMouseEnter={() => handleMouseEnter(image.id)}
          onMouseLeave={handleMouseLeave}
          key={image.id}
          className={`${
            image.id === minId
              ? "col-span-2 row-span-2 flex justify-center items-center p-2 relative"
              : "flex justify-center items-center p-2 relative "
          }`}
        >
          <button onClick={() => toggleImageSelection(image.id)}>
            {image.selected ? (
              <FaCheckSquare className="absolute top-4 lg:top-6 left-3 lg:left-6 bg-white text-[#3366ff]" />
            ) : hoveredImage === image.id ? (
              <FaSquare className="absolute text-sm top-4 lg:top-6 left-4 lg:left-6 text-white border border-[#828282]" />
            ) : null}
          </button>
          <img
            style={
              hoveredImage === image.id
                ? hoveredImageBg
                : image.selected
                ? selectedImageBg
                : {}
            }
            className={`${
              image.id === minId
                ? "h-48 md:h-60 lg:h-72 w-48 md:w-60 lg:w-72"
                : "h-20 md:h-28 lg:h-32 w-20 md:w-28 lg:w-32"
            } border border-[#ced0d4] rounded-lg ${
              hoveredImage === image.id ? "flip-right-animation" : ""
            }`}
            src={image.image}
            alt=""
          />
        </div>
      ))}
      <button onClick={handleAddImage}>
        <div className="flex justify-center items-center text-sm  p-2">
          <div className="border border-[#ced0d4] rounded-lg h-20 md:h-28 lg:h-32 w-20 md:w-28 lg:w-32">
            <FaImage className="h-6 w-6 my-2 lg:my-5 mx-5 lg:mx-12" />
            Add images
          </div>
        </div>
      </button>
    </>
  );
};

export default Gallery;
