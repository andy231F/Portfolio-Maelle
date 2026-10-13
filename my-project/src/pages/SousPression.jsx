import Footer from "../components/Footer";

export default function SousPression() {
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
                alt={`Catfish scene ${index}`}
                className="h-72 w-full rounded-xs object-cover"
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
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
