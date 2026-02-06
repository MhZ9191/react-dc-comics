export default function LinkTohead({ url, title, isActive }) {
  return (
    <li className={isActive ? "active" : ""}>
      <a href={url}>{title}</a>
    </li>
  );
}
