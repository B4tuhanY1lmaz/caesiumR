"use client"

import { Dialog, DialogContent, DialogTitle,
    DialogFooter, DialogHeader} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { useModal } from "@/components/modals/hooks/use-modal-store"

function UserSettingsModal() {
    const { isOpen, onClose, type, data } = useModal()
    const isModalOpen = isOpen && type === "userSettings"

    return (
        <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Settings
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <p>TO-DO Create the contents of User settings</p>
                </div>
                <DialogFooter className="mt-2">
                    <Button>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default UserSettingsModal