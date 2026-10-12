export default function SousPression() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div id="navbar">{/* Import your Navbar component here */}</div>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-center text-4xl font-bold">Sous Pression</h1>
        <h2 className="mb-8 text-base font-medium text-white">
          My 5th year project, work in progress
        </h2>

        <div className="mx-auto max-w-2xl text-base space-y-4 leading-relaxed">
          <p>
            For this project I'm mainly working on the visual developpement,
            backgrounds and compositing.
          </p>
          <p>Story:</p>
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
        <img
          src="../images/sous-pression/img_1.jpg"
          alt="Catfish scene 1"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_2.png"
          alt="Catfish scene 2"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_3.jpg"
          alt="Catfish scene 3"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_4.jpg"
          alt="Catfish scene 4"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_5.jpg"
          alt="Catfish scene 5"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_6.jpg"
          alt="Catfish scene 6"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_7.jpg"
          alt="Catfish scene 7"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_8.jpg"
          alt="Catfish scene 8"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_9.jpg"
          alt="Catfish scene 9"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_10.jpg"
          alt="Catfish scene 10"
          className="h-72 w-full rounded-xl object-cover"
        />
        <img
          src="../images/sous-pression/img_11.jpg"
          alt="Catfish scene 11"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_12.jpg"
          alt="Catfish scene 12"
          className="h-72 w-full rounded-xl object-cover"
        />
        <img
          src="../images/sous-pression/img_13.jpg"
          alt="Catfish scene 13"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_14.jpg"
          alt="Catfish scene 14"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_15.jpg"
          alt="Catfish scene 15"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sous-pression/img_16.jpg"
          alt="Catfish scene 16"
          className="h-72 w-full rounded-xl object-cover"
        />
      </section>

      {/* Main image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="overflow-hidden rounded-xl">
          <img
            src="../images/sous-pression/img_17.jpg"
            alt="Sous Pression scene 17"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
