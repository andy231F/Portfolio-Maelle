import Footer from "../components/Footer";

export default function OtherProjects() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold"> Individual projects</h1>
      </section>

      {/* First two images */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-3 px-6 pb-3 sm:grid-cols-2">
        <img
          src="../images/others/img_1.png"
          alt="Others scene 1"
          className="h-auto w-full rounded-xs object-cover"
        />

        <img
          src="../images/others/img_2.png"
          alt="Others scene 2"
          className="h-auto w-full rounded-xs object-cover"
        />
      </section>

      <section className="mx-auto flex max-w-6xl items-start gap-3 px-6 pb-16">
        <img
          src="../images/others/img_3.png"
          alt="Others scene 3"
          className="h-auto min-w-0 flex-[4] rounded-xs object-cover"
        />

        <img
          src="../images/others/img_4.png"
          alt="Others scene 4"
          className="h-auto min-w-0 flex-[2] rounded-xs object-cover"
        />
      </section>
      {/* Main image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="overflow-hidden rounded-xs">
          <img
            src="../images/others/img_5.png"
            alt="Others project"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
