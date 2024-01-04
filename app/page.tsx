import Image from "next/image";
import Link from "next/link";
import AddToCart from "./components/AddToCart";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <AddToCart />
    </main>
  );
}
