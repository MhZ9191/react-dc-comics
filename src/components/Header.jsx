import LinkTohead from "./LinkToHead";

export default function Header({ headerlinks }) {
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
                {headerlinks.map(({ url, title, isActive }, index) => {
                  return (
                    <LinkTohead
                      key={index}
                      url={url}
                      title={title}
                      isActive={isActive}
                    />
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
