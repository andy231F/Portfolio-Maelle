export default function SharpPotion() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div id="navbar">{/* Import your Navbar component here */}</div>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Sharp Potion</h1>

        <h2 className="mb-8 text-base font-medium text-white">
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

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        <img
          src="../images/sharp-potion/img_1.png"
          alt="Sharp Potion scene 1"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sharp-potion/img_2.png"
          alt="Sharp Potion scene 2"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sharp-potion/img_3.png"
          alt="Sharp Potion scene 3"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sharp-potion/img_4.png"
          alt="Sharp Potion scene 4"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sharp-potion/img_5.png"
          alt="Sharp Potion scene 5"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/sharp-potion/img_6.png"
          alt="Sharp Potion scene 6"
          className="h-72 w-full rounded-xl object-cover"
        />

        {/* 3/3 */}
      </section>

      {/* Main image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="overflow-hidden rounded-xl">
          <img
            src="../images/sharp-potion/img_7.png"
            alt="Sharp Potion scene 7"
            className="h-72 w-full rounded-xl object-cover"
          />
        </div>
      </section>
    </main>
  );
}
