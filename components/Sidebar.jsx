"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ dictionary }) {
    const [sortBy, setSortBy] = useState('trending');

    const handleSetSortBy = (sort) => {
        setSortBy(sort);
    }

    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <Link className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${sortBy == 'trending' ? 'bg-primary text-black' : ''}`} href="?sort-by=trending" onClick={() => handleSetSortBy('trending')}>
                        <Image src="/assets/icons/trending.svg" width="24" height="24" alt="" />
                        <span>{dictionary.trending}</span>
                    </Link>
                </li>
                <li>
                    <Link className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${sortBy == 'new_releases' ? 'bg-primary text-black' : ''}`} href="?sort-by=new_releases" onClick={() => handleSetSortBy('new_releases')}>
                        <Image src="/assets/icons/newRelease.svg" width="24" height="24" alt="" />
                        <span>{dictionary.new_releases}</span>
                    </Link>
                </li>
                <li>
                    <Link className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${sortBy == 'coming_soon' ? 'bg-primary text-black' : ''}`} href="?sort-by=coming_soon" onClick={() => handleSetSortBy('coming_soon')}>
                        <Image src="/assets/icons/commingSoon.svg" width="24" height="24" alt="" />
                        <span>{dictionary.coming_soon}</span>
                    </Link>
                </li>
                <li>
                    <Link className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${sortBy == 'favourites' ? 'bg-primary text-black' : ''}`} href="?sort-by=favourites" onClick={() => handleSetSortBy('favourites')}>
                        <Image src="/assets/icons/favourite.svg" width="24" height="24" alt="" />
                        <span>{dictionary.favourites}</span>
                    </Link>
                </li>
                <li>
                    <Link className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${sortBy == 'watch_later' ? 'bg-primary text-black' : ''}`} href="?sort-by=watch_later" onClick={() => handleSetSortBy('watch_later')}>
                        <Image src="/assets/icons/watchLater.svg" width="24" height="24" alt="" />
                        <span>{dictionary.watch_later}</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
