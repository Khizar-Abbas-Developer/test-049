import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1 className="text-8xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href={"/client"} className="btn btn-accent">Get started</Link>
    </div>
  )
}
export default page;