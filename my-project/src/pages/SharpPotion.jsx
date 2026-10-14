import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";

export default function SharpPotion() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "../images/sharp-potion/img_1.png", alt: "Sharp Potion scene 1" },
    { src: "../images/sharp-potion/img_2.png", alt: "Sharp Potion scene 2" },
    { src: "../images/sharp-potion/img_3.png", alt: "Sharp Potion scene 3" },
    { src: "../images/sharp-potion/img_4.png", alt: "Sharp Potion scene 4" },
    { src: "../images/sharp-potion/img_5.png", alt: "Sharp Potion scene 5" },
    { src: "../images/sharp-potion/img_6.png", alt: "Sharp Potion scene 6" },
    { src: "../images/sharp-potion/img_7.png", alt: "Sharp Potion scene 7" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Sharp Potion</h1>

        <h2 className="text-base font-medium text-white px-34 py-2">
          Some backgrounds from my 3rd year short film
        </h2>

        <div className="mx-auto max-w-2xl space-y-4 text-lg leading-relaxed">
          <p>
            For my 3rd year we have to developp a solo project within 2 months.
            here are some of the backgrounds and props of mine !
          </p>
        </div>
      </section>

      {/* images*/}

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 pb-16 sm:grid-cols-2 ">
        {images.slice(0, 6).map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className={`h-full w-full rounded-xs object-cover cursor-pointer hover:opacity-80`}
          />
        ))}
      </section>

      {/* Last image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        {images.slice(6, 7).map((image) => (
          <div className="overflow-hidden rounded-xs" key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image)}
              className="h-full w-full rounded-xs object-cover cursor-pointer hover:opacity-80"
            />
          </div>
        ))}
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
