import React from 'react'
import Link from 'next/link'


const NavBar = () => {
    return (
        <>
            <header className="py-4 border-b">
                <div className="flex items-center justify-end px-6">
                    <Link href="/login">
                        <a className="hover:text-green-400 hover:underline">Soy el admin 😎</a>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default NavBar
