import Comics from "./Comics";

export default function Main() {
  return (
    <>
      <main>
        <section className="sec-main-top">
          <div className="sec-main-top-div">
            <span>CURRENT SERIES</span>
          </div>
        </section>
        <section className="sec-main">
          <div className="div-main">
            {Comics.map(({ id, title, series, thumb }) => {
              return (
                <div key={id} className="card">
                  <div>
                    <figure>
                      <img src={thumb} alt={title} />
                      <figcaption>{series}</figcaption>
                    </figure>
                  </div>
                </div>
              );
            })}

            {/* <div className="card">
              <figure>
                <img src={Comics[0].thumb} alt={Comics[0].title} />
                <figcaption>{Comics[0].title}</figcaption>
              </figure>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
