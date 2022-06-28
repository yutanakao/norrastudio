import Head from "next/head";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#0a0a0a]">
      <Head>
        <title>norra studio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="items-center text-3xl font-bold text-white">
        norra studio
      </h1>
    </div>
  );
}
