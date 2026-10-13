import Footer from "../components/Footer";

export default function Rennes() {
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

      {/* les images par 3*/}

      {/* 1/3 */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        <img
          src="../images/rennes/img_1.png"
          alt="Rennes scene 1"
          className="h-55 w-full rounded-xs object-cover"
        />

        <img
          src="../images/rennes/img_2.png"
          alt="Rennes scene 2"
          className="h-55 w-full rounded-xs object-cover"
        />

        <img
          src="../images/rennes/img_3.png"
          alt="Rennes scene 3"
          className="h-55 w-full rounded-xs object-cover"
        />

        {/* 2/3 */}

        <img
          src="../images/rennes/img_4.jpg"
          alt="Rennes scene 4"
          className="h-55 w-full rounded-xs object-cover"
        />

        <img
          src="../images/rennes/img_5.jpg"
          alt="Rennes scene 5"
          className="h-55 w-full rounded-xs object-cover"
        />

        <img
          src="../images/rennes/img_6.png"
          alt="Rennes scene 6"
          className="h-55 w-full rounded-xs object-cover"
        />

        {/* 3/3 */}

        <img
          src="../images/rennes/img_7.png"
          alt="Rennes scene 7"
          className="h-55 w-full rounded-xs object-cover"
        />

        <img
          src="../images/rennes/img_8.png"
          alt="Rennes scene 8"
          className="h-55 w-full rounded-xs object-cover"
        />

        <img
          src="../images/rennes/img_9.png"
          alt="Rennes scene 9"
          className="h-55 w-full rounded-xs object-cover"
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
      <Footer />
    </main>
  );
}
