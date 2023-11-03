import { FaCheckSquare } from "react-icons/fa";
import { useImageGalleryContext } from "../../contexts/ImageGalleryContext";
const GalleryHeader = () => {
  const { totalSelected, deleteSelectedImages } = useImageGalleryContext();

  return (
    <>
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
    </>
  );
};

export default GalleryHeader;
