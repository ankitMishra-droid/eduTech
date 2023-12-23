"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Logo } from "@/app/(dashboard)/_components/logo";

export const NavbarItem = () => {
    const pathname = usePathname()
    const { user } = useUser()

    const isTeacher = pathname?.startsWith('/teacher')
    const isPalyerPage = pathname?.includes('/chapter')
    
    return(
        <>
        <div className="hidden md:inline-block">
            <Link href="/">
                <Logo />
            </Link>
        </div>
        <div className="flex gap-x-2 ml-auto">
            {/* <div> */}
            {isTeacher || isPalyerPage ? (
                <Link href="/" className="hidden md:inline-block">
                <Button size='sm' variant='ghost' style={{backgroundColor: "#090A0C", color: "#575A5F"}}>
                    <LogOut className="h-4 w-4 mr-2"/>
                    Exit
                </Button>
                </Link>
            ) : (
            <>
                <Link href="/teacher/courses" className="hidden md:inline-block">
                    <Button size="sm" variant="default" style={{backgroundColor: "#090A0C", color: "#575A5F"}}>
                        Courses
                    </Button>
                </Link>

                <Link href="/book-appointment" className="hidden md:inline-block">
                    <Button size="sm" variant="default" style={{backgroundColor: "#090A0C", color: "#575A5F"}}>
                        Book An Appointment
                    </Button>
                </Link>
            </>
            )}
            {
                !user ? (
                    <Link href="/sign-in">
                        <Button className="text-gray-600" style={{backgroundColor: "#090A0C", color: "#575A5F"}}>Login</Button>
                    </Link>
                ):
                (
                    null
                )
            }
            {/* </div> */}
            <UserButton 
                afterSignOutUrl="/"
                appearance={{
                    variables:{
                        borderRadius: "5px",
                        colorPrimary: "white"
                    }
                }}
            />
        </div>
        </>
    )
}