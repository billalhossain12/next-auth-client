import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="text-center mt-[5rem]">
        <h1 className="text-[3rem] font-semibold">404</h1>
        <p className="text-[1.5rem] font-medium mb-[1rem]">Page Not Found!</p>
        <div>
        <Link href="/"><button className="bg-black text-white px-[2rem] py-2 rounded-md">Go Home</button></Link>
        </div>
        </div>
    </div>
  )
}
export default NotFound