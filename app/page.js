import page from "./week-2/page"
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1> CPRG 306 : Web Development 2 - Assignments</h1>
        <Link href="/week-2" >week-2</Link>
        <Link href="/week-3" >week-3</Link>
        <Link href="/week-4" >week-4</Link>
      </div>
    </main>
  );
}
