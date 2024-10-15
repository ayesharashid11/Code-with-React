import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <h1>Your Logo</h1>

                    <div className="flex items-center lg:order-2">


                        <h1>  Log in</h1>


                        <h1> Get started</h1>


                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>



                                Home

                            </li>
                            <li>

                                About

                            </li>
                            <li>

                                Contact

                            </li>
                            <li>

                                Github

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
