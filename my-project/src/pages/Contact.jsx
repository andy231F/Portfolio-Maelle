export default function Catfish() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <div id="navbar">{/* Import your Navbar component here */}</div>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-5xl font-bold">Catfish</h1>

        <h2 className="mb-8 text-2xl font-medium text-gray-600">
          The story of a hidden love
        </h2>

        <div className="mx-auto max-w-2xl space-y-4 text-lg leading-relaxed">
          <p>
            Produced during my 4th year "Catfish", our personal anim'jam within
            in a week !
          </p>
          <p>
            The objective here was to make a short film with 4 other persons
            within 7 days. It was really challenging ! we had to think fast and
            take quick decisions.
          </p>
          <p>
            I've contributed to many tasks such as concepts, backgrounds layout,
            compositing... Here's the short film and some backgrounds I've
            created.
          </p>
        </div>
      </section>

      {/* Main image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/assets/images/landing_page/img_1.png"
            alt="Catfish project"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <video
          className="w-full rounded-xl shadow-md"
          controls
          preload="metadata"
        >
          <source src="/assets/videos/Olivia.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </section>

      {/* Three images */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        <img
          src="/assets/images/landing_page/img_1.png"
          alt="Catfish scene 1"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="/assets/images/landing_page/img_2.png"
          alt="Catfish scene 2"
          className="h-72 w-full rounded-xl object-cover"
        />

        <img
          src="/assets/images/landing_page/img_3.png"
          alt="Catfish scene 3"
          className="h-72 w-full rounded-xl object-cover"
        />
      </section>
    </main>
  );
}
