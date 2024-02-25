"use client"

import { useState, useEffect } from "react"
import axios from "axios"

import DataTable from "@/components/admin/data-table"
import { columns } from "@/components/admin/users/tabel-colums"
import { Button } from "@/components/ui/button"

function DashboardUsersPage() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true)
            try {
                const response = await axios.get("/dash/users/api")
                console.log(response.data)
                setUsers(response.data)
            } catch (e) {
                console.log(e)
            }

            setLoading(false)
        }

        fetchUsers()
    }, [refresh]);


    if (loading) {
        return (
            <div className={"bg-[#1B4049] rounded-2xl min-h-[100px] mb-5"}>
                <div className={"p-5 justify-center"}>
                    <h3 className={"text-center text-xl font-bold mb-3"}>Loading</h3>
                </div>
            </div>
        )
    }

    return (
        <div className={"bg-[#1B4049] rounded-2xl min-h-[100px] mb-5"}>
            <div className={"p-5 justify-center"}>
                <h3 className={"text-center text-xl font-bold mb-3"}>Manage Users</h3>
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={users}/>
                    <Button variant="ghost" onClick={() => setRefresh(refresh + 1)}>Refresh</Button>
                </div>
            </div>
        </div>
    )
}

export default DashboardUsersPage