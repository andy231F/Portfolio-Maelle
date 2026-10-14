import Footer from "../components/Footer";

const adobeApps = ["Ai", "Pr", "Ps", "Ae", "Ai", "Ps"];

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-9 text-4xl font-bold">Contact</h1>

        <div className="mx-auto max-w-2xl space-y-4 text-lg leading-relaxed Adorn-Engraved-Expanded">
          <p>Email: maellechz@gmail.com</p>
          <p className="py-2">Phone number: +33 06.38.12.68.72</p>
          <p className="py-2">Or reach out to me via social media</p>

          <Footer />

          <p>To see my CV</p>
          <div className="pt-4">
            <button className="bg-white hover:bg-[#F82173] text-black hover:text-white font-bold py-2 px-4 rounded-full">
              Click here !
            </button>
          </div>
        </div>
      </section>
      <p className="py-2 text-lg leading-relaxed Adorn-Engraved-Expanded">
        Softwares
      </p>
      {/* Main image */}
      <div className="mx-auto max-w-xl px-6 pb-12 flex flex-wrap gap-2 ">
        {[
          { name: "After Effects", src: "/banner/ae.svg" },
          { name: "Premiere Pro", src: "/banner/pr.svg" },
          { name: "Photoshop", src: "/banner/ps.svg" },
          { name: "Fresco", src: "/banner/fr.svg" },
          { name: "Toon Boom Harmony", src: "/banner/harmony.svg" },
          { name: "Blender", src: "/banner/blender.svg" },
        ].map((app, index) => (
          <div
            key={`${app.name}-${index}`}
            title={`${app.name}`}
            className="flex h-24 w-24 sm:h-20 sm:w-20 items-center justify-center rounded-md border border-white/20 bg-[#F82173]/90 p-1.5 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 "
          >
            <img
              src={app.src}
              alt={`${app.name}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>

      <form className="mx-auto max-w-md space-y-4 text-left py-5">
        <div>
          <label htmlFor="name" className="block text-sm">
            Name*
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name..."
            className="mt-1 w-full rounded-md border border-white/20 bg-transparent p-3 text-white focus:border-[#F82173] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm">
            Email*
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Your email..."
            className="mt-1 w-full rounded-md border border-white/20 bg-transparent p-3 text-white focus:border-[#F82173] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm">
            Message*
          </label>
          <textarea
            id="message"
            rows="4"
            required
            placeholder="Your message..."
            className="mt-1 w-full resize-none rounded-md border border-white/20 bg-transparent p-3 text-white focus:border-[#F82173] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-white px-4 py-3 font-bold text-black transition hover:bg-[#F82173] hover:text-white"
        >
          Send Message
        </button>
      </form>

      <Footer />
    </main>
  );
}
