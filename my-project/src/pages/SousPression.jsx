import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";

export default function SousPression() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 16 }, (_, i) => {
    const index = i + 1;
    const extension =
      index === 2 ? "png" : index === 3 || index === 4 ? "jpg" : "jpg";

    return {
      src: `../images/sous-pression/img_${index}.${extension}`,
      alt: `Sous Pression scene ${index}`,
    };
  });
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Sous Pression</h1>
        <h2 className="text-base font-medium text-white px-34 py-2">
          My 5th year project, work in progress
        </h2>

        <div className="mx-auto max-w-3xl text-base space-y-4 leading-relaxed">
          <p>
            For this project I'm mainly working on the visual developpement,
            backgrounds and compositing.
          </p>
          <p className="Adorn-Engraved-Expanded py-4">Story:</p>
          <p className="italic">
            In the middle of a parisian party, Stud is pushed by her best
            friend, Jessica, to go buy some alcohol. Forced to team up with
            Arthur, a small, eccentric guy, who's a fan of the medieval times;
            this small journey will test not only Stud's patience, but also the
            vision they have of Jessica.
          </p>
        </div>
      </section>

      {/* images */}

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-2">
        {Array.from({ length: 16 }, (_, i) => {
          const index = i + 1;
          const extension =
            index === 2 ? "png" : index === 3 || index === 4 ? "jpg" : "jpg";

          return (
            <div
              key={index}
              className="flex h-72 w-full items-center justify-center overflow-hidden rounded-xs"
            >
              <img
                src={`../images/sous-pression/img_${index}.${extension}`}
                alt={`Sous Pression scene ${index}`}
                onClick={() => setSelectedImage(images[index - 1])}
                className="h-72 w-full rounded-xs object-cover cursor-pointer hover:opacity-80"
              />
            </div>
          );
        })}
      </section>

      {/* Main image */}

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="overflow-hidden rounded-xs">
          <img
            src="../images/sous-pression/img_17.jpg"
            alt="Sous Pression scene 17"
            onClick={() =>
              setSelectedImage({
                src: "../images/sous-pression/img_17.jpg",
                alt: "Sous Pression scene 17",
              })
            }
            className="h-auto w-full cursor-pointer object-cover hover:opacity-80"
          />
        </div>
      </section>

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        contentLabel="Enlarged Sous Pression image"
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
