import Card from "./cards/Card";

export default function Main({ comicsLink }) {
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
            {comicsLink.map(({ id, title, series, thumb }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  series={series}
                  thumb={thumb}
                />
              );
            })}
          </div>
          <div className="load-more">LOAD MORE</div>
        </section>
      </main>
    </>
  );
}
