import ImageGallery from "../ImageGallery/ImageGallery";
import { ImageGalleryProvider } from "../../contexts/ImageGalleryContext";

const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <ImageGalleryProvider>
          <ImageGallery />
        </ImageGalleryProvider>
      </section>
    </>
  );
};

export default Home;
