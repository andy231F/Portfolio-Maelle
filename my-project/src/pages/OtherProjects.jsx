import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";

export default function OtherProjects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "../images/others/img_1.png", alt: "Others scene 1" },
    { src: "../images/others/img_2.png", alt: "Others scene 2" },
    { src: "../images/others/img_3.png", alt: "Others scene 3" },
    { src: "../images/others/img_4.png", alt: "Others scene 4" },
    { src: "../images/others/img_5.png", alt: "Others project" },
  ];
  const imageClass = "cursor-pointer rounded-xs object-cover hover:opacity-80";

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold"> Individual projects</h1>
      </section>

      {/* first two images */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-3 px-6 pb-3 sm:grid-cols-2">
        {images.slice(0, 2).map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className={`h-auto w-full ${imageClass}`}
          />
        ))}
      </section>

      {/* Images 3 and 4 */}
      <section className="mx-auto flex max-w-6xl items-start gap-3 px-6 pb-16">
        {images.slice(2, 4).map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className={`h-auto min-w-0 rounded-xs object-cover cursor-pointer hover:opacity-80 ${
              index === 0 ? "flex-[4]" : "flex-[2]"
            }`}
          />
        ))}
      </section>
      {/* Main image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <img
          src={images[4].src}
          alt={images[4].alt}
          onClick={() => setSelectedImage(images[4])}
          className={`h-auto w-full ${imageClass}`}
        />
      </section>

      {/* Image popup */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        contentLabel="Enlarged project image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="relative max-h-[90vh] max-w-[90vw] outline-none"
      >
        {selectedImage && (
          <>
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute -right-3 -top-3 z-10 rounded-full bg-white px-3 py-1 text-xl font-bold text-black hover:bg-[#F82173] hover:text-white"
            >
              &times;
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xs object-contain"
            />
          </>
        )}
      </Modal>

      <Footer />
    </main>
  );
}
