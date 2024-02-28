"use client"

import { Dialog, DialogContent,
    DialogDescription, DialogTitle,
    DialogFooter, DialogHeader} from "@/components/ui/dialog"

import { useModal } from "@/components/modals/hooks/use-modal-store"

function CookiesModal() {
    const { isOpen, onClose, type, data } = useModal()
    const isModalOpen = isOpen && type === "cookies"

    return (
        <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Before you continue.
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CookiesModal