import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-3 cursor-pointer">
            <h1 className=" text-[50px]">Not Found Page</h1>
            <Link href={'/'}>Go to Home Page</Link>
    </div>
  )
}
