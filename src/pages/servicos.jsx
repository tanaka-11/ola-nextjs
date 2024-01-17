import Menu from "@/components/Menu";
import Head from "next/head";

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Serviços</title>
        <meta name="description" content="Nossos serviços" />
      </Head>

      <h1>@_Tanaka11_ 🎭</h1>
      <Menu />

      <h2>Serviços</h2>
      <ol>
        <li>Programa</li>
        <li>Artes</li>
        <li>Grau</li>
      </ol>
    </>
  );
}
