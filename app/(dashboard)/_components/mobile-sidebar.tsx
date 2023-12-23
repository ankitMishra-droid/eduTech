import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { Sidebar } from "./sidebar";
import { NavbarItem } from "@/components/navbar-item";

export const MobileSidebar = () => {
    return(
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu color="white" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white">
                {/* <NavbarItem /> */}
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}