const ipDetails = [
  { id: 1, name: "IP Address", value: "192.212.174.101" },
  { id: 2, name: "Location", value: "Brooklyn, NY 10001" },
  { id: 3, name: "Timezone", value: "UTC -05:00" },
  { id: 4, name: "ISP", value: "SpaceX Starlink" },
];

export default function Home() {
  return (
    <main>
      {/* background images section */}
      <section aria-hidden="true">
        <picture>
          <source
            srcSet="/images/backgrounds/pattern-bg-desktop.png"
            media="(min-width: 1024px)"
            width="1440"
            height="280"
          />
          <img
            src="/images/backgrounds/pattern-bg-mobile.png"
            alt="Background pattern"
            width="375"
            height="300"
          />
        </picture>
      </section>

      {/* wrap sections to be overlayed on background images section */}
      <div>
        <header>
          <h1>IP Address Tracker</h1>
        </header>

        {/* search form section */}
        <section>
          <h2 className="sr-only">Search form</h2>
          <form>
            <label htmlFor="search" className="sr-only">
              Search for any IP address or domain
            </label>
            <input
              type="search"
              id="search"
              placeholder="Search for any IP address or domain"
            />
            <button type="submit" aria-label="Submit search">
              <img
                src="/images/icons/icon-arrow.svg"
                alt="Search"
                width="11"
                height="14"
              />
            </button>
          </form>
        </section>

        {/* search results section */}
        <article>
          <h2 className="sr-only">Search Results</h2>
          <dl>
            {ipDetails.map((detail) => (
              <div key={detail.id}>
                <dt>{detail.name}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>

      {/* map results section */}
      <section>
        <h2 className="sr-only">Map Results</h2>
        <div id="map"></div>
      </section>
    </main>
  );
}
