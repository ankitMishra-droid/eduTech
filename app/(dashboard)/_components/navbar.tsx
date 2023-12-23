import { NavbarItem } from "@/components/navbar-item"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    const containerStyle = {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #121416 29.27%, rgba(18, 20, 22, 0.00) 81.09%)',
        backgroundColor: '#000000',
        // fontFamily: "Montserrat"
      };
    return(
        <div className="border-b border-black" style={containerStyle}>
        <div className="p-4 h-full flex items-center w-full shadow-sm md:container">
            <MobileSidebar />
            <NavbarItem />
        </div>
        </div>
    )
}