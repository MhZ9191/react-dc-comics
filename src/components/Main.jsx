import Comics from "./Comics";

export default function Main() {
  return (
    <>
      <main>
        <section className="sec-main">
          <div className="div-main">
            {Comics.map(({ id, title, thumb }) => {
              return (
                <div key={id} className="card">
                  <figure>
                    <img src={thumb} alt={title} />
                    <figcaption>{title}</figcaption>
                  </figure>
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
