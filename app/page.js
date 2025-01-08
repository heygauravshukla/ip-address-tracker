import Wrapper from "@/components/Wrapper";

const ipDetails = [
  { id: 1, name: "IP Address", value: "192.212.174.101" },
  { id: 2, name: "Location", value: "Brooklyn, NY 10001" },
  { id: 3, name: "Timezone", value: "UTC -05:00" },
  { id: 4, name: "ISP", value: "SpaceX Starlink" },
];

export default function Home() {
  return (
    <>
      <header>
        <Wrapper>
          <h1>IP Address Tracker</h1>
          <form>
            <input
              type="search"
              placeholder="Search for any IP address or domain"
            />
            <button type="submit">
              <img
                src="/images/icons/icon-arrow.svg"
                alt="Search"
                width="11"
                height="14"
              />
            </button>
          </form>
        </Wrapper>
      </header>

      <main>
        <section>
          <Wrapper>
            <dl>
              {ipDetails.map((detail) => (
                <div key={detail.id}>
                  <dt>{detail.name}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </Wrapper>
          <div id="map"></div>
        </section>
      </main>
    </>
  );
}
