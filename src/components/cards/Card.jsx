export default function Card({ id, title, series, thumb }) {
  return (
    <div className="card">
      <div>
        <figure>
          <img src={thumb} alt={title} />
          <figcaption>{series}</figcaption>
        </figure>
      </div>
    </div>
  );
}
