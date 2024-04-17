"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="not-found text-center">
            <img src="/assets/no-product-found.png" alt="not-found" className="w-full max-w-[500px] h-auto" />
            <br />
            <br />
            <h2>This movie with was not found!</h2>
            <br />
            <Link href="/" className="text-blue-700">BACK TO HOMEPAGE</Link>
        </div>
    )
}
