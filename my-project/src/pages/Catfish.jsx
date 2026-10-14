import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";

export default function Catfish() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "../images/catfish/img_2.png", alt: "Catfish scene 1" },
    { src: "../images/catfish/img_3.png", alt: "Catfish scene 2" },
    { src: "../images/catfish/img_4.png", alt: "Catfish scene 3" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Catfish</h1>

        <h2 className="text-base font-medium text-white px-34 py-2">
          The story of a hidden love
        </h2>

        <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed ">
          <p>
            Produced during my 4th year "Catfish", our personal anim'jam within
            in a week !
          </p>
          <p className="py-4">
            The objective here was to make a short film with 4 other persons
            within 7 days. It was really challenging ! we had to think fast and
            take quick decisions.
          </p>
          <p>
            I've contributed to many tasks such as concepts, backgrounds layout,
            compositing... Here's the short film and some backgrounds I've
            created.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <img
          src="../images/catfish/img_1.jpg"
          alt="Catfish project"
          onClick={() =>
            setSelectedImage({
              src: "../images/catfish/img_1.jpg",
              alt: "Catfish project",
            })
          }
          className="h-auto w-full cursor-pointer rounded-xs object-cover"
        />
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

      {/* Three clickable images */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className="h-72 w-full cursor-pointer rounded-xs object-cover transition-opacity hover:opacity-80"
          />
        ))}
      </section>

      {/* Image popup */}
      
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        contentLabel="Enlarged image"
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
