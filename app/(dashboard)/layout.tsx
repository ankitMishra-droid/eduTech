import { Navbar } from "./_components/navbar"
import { ToasterProvider } from "./_components/providers/toaster-provider"
// import { Sidebar } from "./_components/sidebar"

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <div className="h-full">
            <div className="h-[80px] fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>
            {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div> */}
            <main className="md:pt-[80px] pt-[64px] h-full">
                <ToasterProvider />
                {children}
            </main>
            </div>
        </>
    )
}

export default DashboardLayout