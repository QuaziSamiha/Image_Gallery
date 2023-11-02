import { useState } from "react";
import { Draggable } from "react-drag-reorder";

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

const ImageGallery2 = () => {
  const [isSelected, setIsSelected] = useState(0);
  const images = [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  const renderImages = () => {
    const layout = [];
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const isEven = i % 2 === 0;

      layout.push(
        <div
          key={i}
          className={`flex justify-center items-center p-2 ${
            isEven ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          }`}
        >
          <Draggable key={i} onDrag={() => handleDrag(i)}>
            <img
              className="border border-[#ced0d4] rounded-lg h-32 w-32"
              src={image}
              alt=""
            />
          </Draggable>
        </div>
      );
    }
    return layout;
  };

  const handleDrag = (index) => {
    // Handle image reordering logic here
    console.log("Image at index", index, "is being dragged.");
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
                    {isSelected > 0 ? (
                      <h1>{isSelected} Files Selected</h1>
                    ) : (
                      <h1>Image Gallery</h1>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center text-bold">
                  <div className="py-3 px-8">
                    {isSelected > 0 && (
                      <h1>
                        <small className="text-[#ef7464]">Delete Files</small>
                      </h1>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-3">{renderImages()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery2;