const linkHeaders = [
  {
    url: "#",
    title: "CHARACTERS",
    isActive: false,
  },
  {
    url: "#",
    title: "COMICS",
    isActive: true,
  },
  {
    url: "#",
    title: "MOVIES",
    isActive: false,
  },
  {
    url: "#",
    title: "TV",
    isActive: false,
  },
  {
    url: "#",
    title: "GAMES",
    isActive: false,
  },
  {
    url: "#",
    title: "COLLECTIBLES",
    isActive: false,
  },
  {
    url: "#",
    title: "VIDEOS",
    isActive: false,
  },
  {
    url: "#",
    title: "FANS",
    isActive: false,
  },
  {
    url: "#",
    title: "NEWS",
    isActive: false,
  },
  {
    url: "#",
    title: "SHOP",
    isActive: false,
  },
];

export default function Header() {
  return (
    <>
      <header>
        <div className="top-header"></div>
        <section className="sec-header">
          <div className="div-header">
            <div className="logo-header">
              <img src="/dc-logo.png" alt="dc-logo" />
            </div>
            <div>
              <div className="btn-menu"></div>
              <div className="menu">
                <ul className="menu-link hidden">
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                  <li>
                    <a href="#">test</a>
                  </li>
                </ul>
              </div>
              <ul className="link-header">
                {linkHeaders.map(({ url, title, isActive }, index) => {
                  return (
                    <li key={index} className={isActive ? "active" : ""}>
                      <a href={url}>{title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
