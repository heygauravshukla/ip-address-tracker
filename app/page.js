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
      <header className="min-h-[18.75rem] bg-[url('/images/backgrounds/pattern-bg-mobile.png')] bg-cover bg-center bg-no-repeat lg:min-h-[17.5rem] lg:bg-[url('/images/backgrounds/pattern-bg-desktop.png')]">
        <Wrapper className="grid gap-7 pt-7">
          <h1 className="text-center text-[1.625rem] font-medium text-white lg:text-[2rem]">
            IP Address Tracker
          </h1>
          <form className="mx-auto flex w-full max-w-[34.6875rem]">
            <input
              type="search"
              placeholder="Search for any IP address or domain"
              className="w-full cursor-pointer rounded-l-2xl bg-white px-6 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-r-2xl bg-black px-6 py-[1.375rem] transition-all hover:bg-gray-800"
            >
              <img
                src="/images/icons/icon-arrow.svg"
                alt="Search"
                width="11"
                height="14"
                className="min-w-fit"
              />
            </button>
          </form>
        </Wrapper>
      </header>

      <main>
        <section className="relative">
          <Wrapper className="absolute inset-x-0 -top-32 lg:-top-20">
            <dl className="mx-auto grid max-w-[69.375rem] gap-6 rounded-2xl bg-white p-6 shadow-lg lg:grid-cols-4 lg:gap-0 lg:p-0">
              {ipDetails.map((detail) => (
                <div
                  key={detail.id}
                  className="grid gap-1.5 text-center lg:relative lg:content-start lg:gap-4 lg:px-8 lg:py-9 lg:text-left lg:not-first:before:absolute lg:not-first:before:inset-y-10.5 lg:not-first:before:left-0 lg:not-first:before:w-px lg:not-first:before:bg-gray-400 lg:not-first:before:content-['']"
                >
                  <dt className="text-[0.625rem] font-bold tracking-[0.16em] text-gray-400 uppercase lg:text-xs/[normal] lg:font-medium">
                    {detail.name}
                  </dt>
                  <dd className="text-xl/[normal] font-medium lg:text-2xl/[normal] lg:tracking-[0.03em]">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Wrapper>
          <div id="map" className="min-h-96"></div>
        </section>
      </main>
    </>
  );
}
