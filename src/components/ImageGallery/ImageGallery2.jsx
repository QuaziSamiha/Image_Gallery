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
  // const [isSelected, setIsSelected] = useState(false);
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
  // const [newImageURL, setNewImageURL] = useState("");
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
        <div className="bg-[#ecf1f6] h-screen p-8 flex justify-center items-center">
          <div className="rounded-md bg-white py-4">
            <div className="border-b-2 border-[#f2f2f3] h-12">
              <div className="flex justify-between">
                <div className="flex justify-center items-center text-bold">
                  <div className="py-3 px-8">
                    {totalSelected > 0 ? (
                      <>
                        <h1>{totalSelected} Files Selected</h1>
                      </>
                    ) : (
                      <>
                        {" "}
                        <h1>Image Gallery</h1>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center text-bold">
                  <div className="py-3 px-8">
                    <button
                      onClick={deleteSelectedImages}
                      className={`${totalSelected > 0 ? "" : "hidden"}`}
                    >
                      <small className="text-[#ef7464]">Delete Files</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-3">
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
                      <FaCheckSquare className="absolute top-6 left-6 text-[#3366ff]" />
                    ) : hoveredImage === image.id ? (
                      <FaSquare className="absolute top-6 left-6 text-white border border-[#828282]" />
                    ) : null}
                  </button>
                  <img
                    className={`${
                      image.id === min ? "h-72 w-72" : "h-32 w-32"
                    } border border-[#ced0d4] rounded-lg`}
                    src={image.image}
                    alt=""
                  />
                </div>
              ))}
              <button onClick={handleAddImage}>
                <div className="flex justify-center items-center  p-2">
                  <div className="border border-[#ced0d4] rounded-lg h-32 w-32">
                    <FaImage className="h-6 w-6 my-5 mx-12" />
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
