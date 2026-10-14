import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";

export default function Rennes() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "../images/rennes/img_1.png", alt: "Rennes scene 1" },
    { src: "../images/rennes/img_2.png", alt: "Rennes scene 2" },
    { src: "../images/rennes/img_3.png", alt: "Rennes scene 3" },
    { src: "../images/rennes/img_4.jpg", alt: "Rennes scene 4" },
    { src: "../images/rennes/img_5.jpg", alt: "Rennes scene 5" },
    { src: "../images/rennes/img_6.png", alt: "Rennes scene 6" },
    { src: "../images/rennes/img_7.png", alt: "Rennes scene 7" },
    { src: "../images/rennes/img_8.png", alt: "Rennes scene 8" },
    { src: "../images/rennes/img_9.png", alt: "Rennes scene 9" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Rennes animation festival</h1>

        <h2 className="text-base font-medium text-white px-34 py-2">
          One of the many intros at the 2025 "National Animated Film Festival"
          in Rennes, France
        </h2>

        <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed ">
          <p>
            In my 4th year we had to make, competiting with other schools, an
            animated introduction based on the poster of the 2025 edition of
            "The National animated film festival". We had to make a vertical and
            an horizontal versions.
          </p>
          <p className="py-4">
            Our project was selected to be one of the intros before the
            screening !
          </p>
          <p>Here's some of the backgrounds I made for this 3 month project.</p>
        </div>
      </section>

      {/* les images*/}

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className="h-55 w-full cursor-pointer rounded-xs object-cover transition-opacity hover:opacity-80"
          />
        ))}
      </section>

      {/* Video */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <video
          className="w-full rounded-xs shadow-md"
          controls
          preload="metadata"
        >
          <source src="../videos/Olivia.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </section>

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        contentLabel="Enlarged Rennes image"
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
