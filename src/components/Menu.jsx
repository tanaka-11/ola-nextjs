import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/equipe">Equipe</Link>
        </li>

        <li>
          <Link href="/servicos">Serviços</Link>
        </li>
      </ul>
    </nav>
  );
}
