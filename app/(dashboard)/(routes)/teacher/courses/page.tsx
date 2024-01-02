import { Button } from "@/components/ui/button"
import Link from "next/link"

const Coursepage = () => {
    return(
        <div className="p-6 md:container">
            <Link href="/teacher/create">
            <Button className="p-6">
                New Course
            </Button>
            </Link>
        </div>
    )
}

export default Coursepage