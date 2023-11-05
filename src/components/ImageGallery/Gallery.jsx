import { FaCheckSquare, FaImage, FaSquare } from "react-icons/fa";
import { useImageGalleryContext } from "../../contexts/ImageGalleryContext";
import "./gallery.css";
const Gallery = () => {
  const {
    hoveredImage,
    images,
    handleMouseEnter,
    handleMouseLeave,
    toggleImageSelection,
    minId,
  } = useImageGalleryContext();

  return (
    <>
      {images.map((image) => (
        <div
          onMouseEnter={() => handleMouseEnter(image.id)}
          onMouseLeave={handleMouseLeave}
          key={image.id}
          className={`${
            image.id === minId
              ? "col-span-2 row-span-2 "
              : "col-span-1 row-span-1"
          } flex justify-center items-center p-2 relative`}
        >
          <button onClick={() => toggleImageSelection(image.id)}>
            {image.selected ? (
              <FaCheckSquare className="absolute top-4 lg:top-6 left-3 lg:left-6 bg-white text-[#3366ff]" />
            ) : hoveredImage === image.id ? (
              <FaSquare className="absolute text-sm top-4 lg:top-6 left-4 lg:left-6 text-white border border-[#828282]" />
            ) : null}
          </button>
          <img
            className={`${
              image.id === minId
                ? "h-48 md:h-60 lg:h-72 w-48 md:w-60 lg:w-72"
                : "h-20 md:h-28 lg:h-32 w-20 md:w-28 lg:w-32"
            }
            ${
              hoveredImage === image.id
                ? "flip-right-animation hoveredImageBg"
                : ""
            }
            ${image.selected ? "selectedImageBg" : ""} 
            border border-[#ced0d4] rounded-lg`}
            src={image.image}
            alt=""
          />
        </div>
      ))}
      <button>
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
