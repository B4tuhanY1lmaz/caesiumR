import { getAllUsers } from "@/lib/dbUsers"
import { useRouter } from "next/navigation"

import DataTable from "@/components/admin/data-table"
import { columns } from "@/components/admin/users/tabel-colums"

async function DashboardUsersPage() {

    const dbusers = await getAllUsers()

    return (
        <div className={"bg-[#1B4049] rounded-2xl min-h-[100px] mb-5"}>
            <div className={"p-5 justify-center"}>
                <h3 className={"text-center text-xl font-bold mb-3"}>Manage Users</h3>
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={dbusers} />
                </div>
            </div>
        </div>
    )
}

export default DashboardUsersPage