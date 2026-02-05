import Links from "./Links";
const miniCard = [
  {
    source: "/buy-comics-digital-comics.png",
    title: "DIGITAL COMICS",
  },
  {
    source: "/buy-comics-shop-locator.png",
    title: "COMIC SHOP LOCATOR",
  },
  {
    source: "/buy-comics-merchandise.png",
    title: "DC MERCHANDISE",
  },
  {
    source: "/buy-comics-subscriptions.png",
    title: "SUBSCRIPTION",
  },
  {
    source: "/buy-dc-power-visa.svg",
    title: "DC POWER VISA",
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <section className="first-sec-footer">
          <div className="first-div-footer">
            {miniCard.map(({ source, title }) => {
              return (
                <div className="first-div-mini-card">
                  <div>
                    <figure>
                      <img src={source} alt={title} />
                    </figure>
                  </div>
                  <span>{title}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION TWO */}
        <section className="second-sec-footer">
          <div className="second-div-footer">
            <div className="footer-link-container">
              {Links.map(({ title, allLinks }, index) => {
                return (
                  <div key={index} className="foo-link">
                    <span>{title}</span>
                    <ul>
                      {allLinks.map(({ url, text }, ind) => {
                        return (
                          <li key={ind} className="foot-li">
                            <a href={url}>{text}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
