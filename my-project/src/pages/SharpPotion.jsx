import Footer from "../components/Footer";

export default function SharpPotion() {
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
        <img
          src="../images/sharp-potion/img_1.png"
          alt="Sharp Potion scene 1"
          className="h-full w-full rounded-xs object-cover"
        />

        <img
          src="../images/sharp-potion/img_2.png"
          alt="Sharp Potion scene 2"
          className="h-full w-full rounded-xs object-cover"
        />

        <img
          src="../images/sharp-potion/img_3.png"
          alt="Sharp Potion scene 3"
          className="h-full w-full rounded-xs object-cover"
        />

        <img
          src="../images/sharp-potion/img_4.png"
          alt="Sharp Potion scene 4"
          className="h-full w-full rounded-xs object-cover"
        />

        <img
          src="../images/sharp-potion/img_5.png"
          alt="Sharp Potion scene 5"
          className="h-full w-full rounded-xs object-cover"
        />

        <img
          src="../images/sharp-potion/img_6.png"
          alt="Sharp Potion scene 6"
          className="h-full w-full rounded-xs object-cover"
        />

        {/* 3/3 */}
      </section>

      {/* Last image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="overflow-hidden rounded-xs">
          <img
            src="../images/sharp-potion/img_7.png"
            alt="Sharp Potion scene 7"
            className="h-full w-full rounded-xs object-cover"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
