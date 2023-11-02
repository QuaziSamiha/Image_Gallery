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
// import { FaCheckSquare, FaSquare } from "react-icons/fa";
import { Draggable } from "react-drag-reorder";

const ImageGallery2 = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const min = 1;
  const images = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 7, image: img3 },
    { id: 3, image: img4 },
    { id: 4, image: img5 },
    { id: 5, image: img6 },
    { id: 6, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
  ];
  // console.log(images);
  return (
    <>
      <div className="w-4/6">
        <div className="bg-[#ecf1f6] h-screen p-8 flex justify-center items-center">
          <div className="rounded-md bg-white py-4">
            <div className="border-b-2 border-[#f2f2f3] h-12">
              <div className="flex justify-between">
                <div className="flex justify-center items-center text-bold">
                  <div className="py-3 px-8">
                    {isSelected > 0 ? (
                      <>
                        <h1>{isSelected} Files Selected</h1>
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
                    <h1 className={`${isSelected > 0 ? "" : "hidden"}`}>
                      <small className="text-[#ef7464]">Delete Files</small>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-3">
              {images.map((image) => (
                <div
                  key={image.id}
                  className={`${
                    image.id === min
                      ? "col-span-2 row-span-2 flex justify-center items-center p-2"
                      : "flex justify-center items-center p-2"
                  }`}
                >
                  <img
                    className={`${
                      image.id === min ? "h-72 w-72" : "h-32 w-32"
                    } border border-[#ced0d4] rounded-lg`}
                    src={image.image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery2;
