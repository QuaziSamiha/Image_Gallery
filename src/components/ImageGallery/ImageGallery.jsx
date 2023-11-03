import Gallery from "./Gallery";
import GalleryHeader from "./GalleryHeader";

const ImageGallery = () => {
  return (
    <>
      <div className="w-4/6">
        <div className="bg-[#ecf1f6] h-full p-3 md:p-8 flex justify-center items-center">
          <div className="rounded-md bg-white py-1 lg:py-4">
            <div className="border-b-2 border-[#f2f2f3] h-14 sm:h-10 lg:h-12">
              <GalleryHeader />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-3">
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageGallery;
