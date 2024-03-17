"use client"

import { Dialog, DialogContent, DialogTitle,
    DialogFooter, DialogHeader} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { useModal } from "@/components/modals/hooks/use-modal-store"

function DeleteUserModal() {
    const { isOpen, onClose, type, data } = useModal()
    const isModalOpen = isOpen && type === "deleteUser"

    const handleUserDelete = () => {

    }

    return (
        <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-red-500">
                        Are you Sure?
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <p>This will delete the user and all it's contents.</p>
                    <p className="font-bold text-rose-300">This action is irreversible! Are you sure?</p>
                </div>
                <DialogFooter className="mt-2">
                    <Button className="bg-rose-500">Delete user</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteUserModal