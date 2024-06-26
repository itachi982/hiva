import { Button, Heading, InputBox, SubHeading } from "./SigninHelper"
import logo from "../assets/logo.png"

export const Footer=()=> {
    return <footer className="bg-slate-300 rounded-lg shadow-lg pt-5">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt={logo} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 space-x-10 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/About" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/Privacypolicy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/Licensing" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="/Contactus" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
     <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/home" className="hover:underline">HIVA™</a>. All Rights Reserved.</span>
    </div>
</footer>
}

// line 28 home link
//line 08 home link
