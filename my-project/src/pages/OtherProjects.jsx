export default function OtherProjects() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-5xl font-bold text-white">
          Individual projects
        </h1>
      </section>

      {/* Three images */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-2">
        <img
          src="../images/others/img_1.png"
          alt="Oyhers scene 1"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/others/img_2.png"
          alt="Oyhers scene 1"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/others/img_3.png"
          alt="Oyhers scene 2"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="../images/others/img_4.png"
          alt="Oyhers scene 3"
          className="h-72 w-full rounded-xl object-cover"
        />
      </section>

      {/* Main image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="overflow-hidden rounded-xl">
          <img
            src="../images/others/img_5.png"
            alt="Oyhers project"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
