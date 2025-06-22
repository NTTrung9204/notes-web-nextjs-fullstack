import HomePage from "@/components/HomePage";

export default async function Home() {
  // await fetch('http://localhost:3000/api/counter', { method: 'PATCH' });

  const res = await fetch('http://localhost:3000/api/counter', { method: 'PATCH' });

  const data = await res.json();

  return (
    <HomePage count={data.visitorCounter} />
  );
}
