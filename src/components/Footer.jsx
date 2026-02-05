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
            <div className="img-foot"></div>
          </div>
        </section>
        <section className="last-foot">
          <div className="last-div-foot">
            <div className="sign-up-now">SIGN-UP NOW!</div>
            <div className="social-link">
              <div>FOLLOW US</div>
              <div>
                <img src="/footer-twitter.png" alt="#" />
              </div>
              <div>
                <img src="/footer-facebook.png" alt="#" />
              </div>
              <div>
                <img src="/footer-youtube.png" alt="#" />
              </div>
              <div>
                <img src="/footer-pinterest.png" alt="#" />
              </div>
              <div>
                <img src="/footer-periscope.png" alt="#" />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
