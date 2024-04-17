/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="not-found text-center">
            <img src="/assets/not-found.png" alt="not-found" className="w-full max-w-[500px] h-auto" />
            <br />
            <br />
            <h2>Page Not Found</h2>
            <h3>Something went wrong.</h3>
            <br />
            <Link href="/" className="text-blue-700">BACK TO HOMEPAGE</Link>
        </div>
    )
}
