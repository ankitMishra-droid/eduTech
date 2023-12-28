"use client"

import Image from "next/image"
import Logo from "../../../assets/images/logo.svg"
import Link from "next/link";
import facebook from "../../../assets/images/facebook.svg";
import whatsapp from "../../../assets/images/whatsapp 1.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import insta from "../../../assets/images/insta.svg";

export default function FooterComponent() {
    return(
        <>
        <div className="w-full bg-black mt-20">
            <div className="md:container">link link:hover text-base py-2 hover:underline hover:text-orange-500 inline-block hover:underline hover:text-orange-500 inline-block
                <footer className="bg-black text-white p-12">
                    <Link href="/" className="py-12">
                        <Image src={Logo} alt="logoImage"/>
                    </Link>
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
                        {/* Column 1 */}
                        <div>
                            <div className="text-white mt-16 max-[767px]:pr-3 align-middle ">
                                <nav className="text-white flex flex-col align-center justify-start">
                                    <Link href="" className="link link:hover text-base py-2 hover:underline hover:text-orange-500 inline-block"><span className="">Contact Us</span></Link>
                                    <Link href="" className="link link:hover text-base py-2 hover:underline hover:text-orange-500 inline-block"><span>Terms & Condition</span></Link>
                                    <Link href="" className="link link:hover text-base py-2 hover:underline hover:text-orange-500 inline-block"><span>Privacy Policy</span></Link>
                                </nav>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <div className="text-white mt-16 ">
                                <nav className="text-white flex flex-col align-center justify-start">
                                    <Link href="" className="link link:hover text-base py-2 hover:underline hover:text-orange-500 inline-block">Register Now</Link>
                                    <Link href="" className="link link:hover text-base py-2 hover:underline hover:text-orange-500 inline-block">Franchise</Link>
                                    <Link href="" className="link link:hover text-base py-2 hover:underline hover:text-orange-500 inline-block">Skill Developments</Link>
                                    <Link href="" className="link link:hover text-base py-2 hover:underline hover:text-orange-500 inline-block">Aashram</Link>
                                </nav>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <div className="text-white mt-16">
                                <nav className="text-white flex flex-col align-center justify-start">
                                    <header>CONTACT US</header>
                                    <p className="py-2 inline-block">Huttenstrasse 57, Carinthia, Tschedram</p>
                                    <p className="py-2 inline-block">Huttenstrasse 57, Carinthia, Tschedram</p>
                                    <p className="py-2 inline-block"><strong>Tel:</strong> +43 0699 234 89 46</p>
                                    <p className="py-2 inline-block"><strong>E-Mail:</strong> odessa.strosin@yahoo.com</p>
                                </nav>
                            </div>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <div className="text-white mt-16 lg:ml-5">
                                <nav className="text-white flex flex-col align-center justify-start">
                                    <header>WORKING HOURS</header>
                                    <p className="py-2 inline-block">Monday to Friday</p>
                                    <p className="py-2 inline-block">9:30 AM to 8:00 PM</p>
                                    <div className="mt-10">
                                        <ul className="flex ">
                                            <li className="pr-5">
                                                <Link href="">
                                                    <Image src={facebook} alt="facebook"/>
                                                </Link>
                                            </li>
                                            <li className="pr-5">
                                                <Link href="">
                                                    <Image src={insta} alt="facebook"/>
                                                </Link>
                                            </li>
                                            <li className="pr-5">
                                                <Link href="">
                                                    <Image src={linkedin} alt="facebook"/>
                                                </Link>
                                            </li>
                                            <li className="pr-5">
                                                <Link href="">
                                                    <Image src={whatsapp} alt="facebook"/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-32">
                        <p className="text-sm font-normal">Copyright Mentoring India &copy; 2023 - 2024</p>
                    </div>
                </footer>
            </div>
        </div>
        </>
    )
}