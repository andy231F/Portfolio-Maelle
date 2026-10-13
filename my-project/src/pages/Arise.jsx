import Footer from "../components/Footer";

export default function Arise() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Arise</h1>

        <h2 className="text-base font-medium text-white px-34 py-2">
          Props concept for the video game "Arise".
        </h2>

        <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed">
          <p>
            For the end of my 3rd year I did one month internship for the studio
            Hot Chili Games (a video Based on the script), I developped the
            concept of the main character's house and some surrounding graphic
            elements. Here is below the concepts I've done for the Video game
            Arise.
          </p>
          <p className="py-4">
            <span className="underline px-1">Credit:</span>
            Concept and lineart made by Maëlle Chaize
          </p>
          <p>
            Colour and various details made by the artist of the studio Hot
            Chili Games, Victor Mauduy.
          </p>
        </div>
      </section>

      {/* les images par 2 */}

      {/* 1/2 */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-2">
        <img
          src="../images/arise/img_1.png"
          alt="Catfish scene 1"
          className="h-72 w-full rounded-xs object-cover"
        />

        <img
          src="../images/arise/img_2.jpg"
          alt="Catfish scene 2"
          className="h-72 w-full rounded-xs object-cover"
        />

        <img
          src="../images/arise/img_3.png"
          alt="Catfish scene 1"
          className="h-72 w-full rounded-xs object-cover"
        />

        <img
          src="../images/arise/img_4.png"
          alt="Catfish scene 2"
          className="h-72 w-full rounded-xs object-cover"
        />

        <img
          src="../images/arise/img_5.png"
          alt="Catfish scene 1"
          className="h-72 w-full rounded-xs object-cover"
        />

        <img
          src="../images/arise/img_6.png"
          alt="Catfish scene 2"
          className="h-72 w-full rounded-xs object-cover"
        />
      </section>
      <Footer />
    </main>
  );
}
