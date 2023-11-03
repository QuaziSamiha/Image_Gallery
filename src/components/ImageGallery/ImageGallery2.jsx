import { useState } from "react";
import img1 from "../../assets/images/image-1.png";
import img2 from "../../assets/images/image-2.png";
import img3 from "../../assets/images/image-3.png";
import img4 from "../../assets/images/image-4.png";
import img5 from "../../assets/images/image-5.png";
import img6 from "../../assets/images/image-6.png";
import img7 from "../../assets/images/image-7.png";
import img8 from "../../assets/images/image-8.webp";
import img9 from "../../assets/images/image-9.webp";
import img10 from "../../assets/images/image-10.jpeg";
import img11 from "../../assets/images/image-11.jpeg";
import { FaCheckSquare, FaImage, FaSquare } from "react-icons/fa";
// import { Draggable } from "react-drag-reorder";

const ImageGallery2 = () => {
  const [totalSelected, setTotalSelected] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);
  const min = 1;
  const [images, setImages] = useState([
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
  ]);
  const [newImageId, setNewImageId] = useState(images.length + 1);

  // console.log(images);
  const handleMouseEnter = (imageId) => {
    setHoveredImage(imageId);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };
  // ---------------------------------------- Image Add ---------------------------------------
  const handleAddImage = () => {
    const newImage = {
      id: newImageId,
      image: "",
      selected: false,
    };
    setImages([...images, newImage]);
    setNewImageId(newImageId + 1);
    console.log("image added");
  };

  // --------------------------------Image Delete ----------------------------------------
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
  return (
    <>
      <div className="w-4/6">
        <div className="bg-[#ecf1f6] h-full p-3 md:p-8 flex justify-center items-center">
          <div className="rounded-md bg-white py-1 lg:py-4">
            <div className="border-b-2 border-[#f2f2f3] h-14 sm:h-10 lg:h-12">
              <div className="sm:flex justify-between">
                <div className="flex justify-center justify-items-center text-bold">
                  <div className="sm:py-1 lg:py-3 px-2 lg:px-8">
                    {totalSelected > 0 ? (
                      <>
                        <h1 className="font-bold text-[#545556] text-base lg:text-lg flex items-center">
                          <FaCheckSquare className="mr-2 text-[#3366ff]" />
                          {totalSelected} Files Selected
                        </h1>
                      </>
                    ) : (
                      <>
                        <h1 className="font-bold text-[#545556] text-base lg:text-lg flex items-center">
                          Image Gallery
                        </h1>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center text-bold">
                  <div className="sm:py-1 lg:py-3 px-8">
                    <button
                      onClick={deleteSelectedImages}
                      className={`${totalSelected > 0 ? "" : "hidden"}`}
                    >
                      <small className="text-[#ef7464] font-semibold">
                        Delete Files
                      </small>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-3">
              {images.map((image) => (
                <div
                  onMouseEnter={() => handleMouseEnter(image.id)}
                  onMouseLeave={handleMouseLeave}
                  key={image.id}
                  className={`${
                    image.id === min
                      ? "col-span-2 row-span-2 flex justify-center items-center p-2 relative"
                      : "flex justify-center items-center p-2 relative"
                  }`}
                >
                  <button onClick={() => toggleImageSelection(image.id)}>
                    {image.selected ? (
                      <FaCheckSquare className="absolute top-4 lg:top-6 left-7 lg:left-6 text-[#3366ff]" />
                    ) : hoveredImage === image.id ? (
                      <FaSquare className="absolute text-sm top-4 lg:top-6 left-4 lg:left-6 text-white border border-[#828282]" />
                    ) : null}
                  </button>
                  <img
                    className={`${
                      image.id === min
                        ? "h-48 md:h-60 lg:h-72 w-48 md:w-60 lg:w-72"
                        : "h-20 md:h-28 lg:h-32 w-20 md:w-28 lg:w-32"
                    } border border-[#ced0d4] rounded-lg`}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageGallery2;
