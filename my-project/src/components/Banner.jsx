export default function Banner() {
  return (
    <section className="image-banner">
      <img
        src="../../images/banner/banner.png"
        className="banner-img"
        alt="Background banner"
      />

      <div className="text-banner">
        <h1>Background</h1>
        <h2>Layout Artist</h2>
        <h3>Line and color</h3>
      </div>

      <div className="svg-corner-container">
        {["A", "P", "Ps", "A", "P", "Ps"].map((label, index) => (
          <div className="banner-icon" key={index}>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <ul className="banner-links">
        <li>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
        </li>

        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky"
          >
            Bluesky
          </a>
        </li>
      </ul>
    </section>
  );
}
