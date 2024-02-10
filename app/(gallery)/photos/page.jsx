import fs from "fs"
import path from "path"

import GalleryItem from "@/components/gallery/gallery-item"
import HeroSection from "@/components/body/hero-section"

export function getGallery() {
    const folderPath = path.join(process.cwd(), 'public/cdn/gallery');
    const files = fs.readdirSync(folderPath);
    const pngFiles = files.filter((file) => file.endsWith('.png'));
    return {
        pngFiles: pngFiles,
    };
}

async function GalleryPage() {
    const gallery = await getGallery()
    const photos = gallery.pngFiles;

    if(!photos) {
        return (
            <div className="mx-auto justify-center text-center text-2xl">
                <p>There is nothing here.</p>
            </div>
        )
    }

    return (
        <div className="justify-center">
            <div className="items-center">
                <HeroSection
                    header={"Server Gallery"}
                />
            </div>
            <div className="container ml-auto px-5 py-2">
                <div className="justify-center items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-2">
                        {photos.map((file) => (
                            <GalleryItem
                                key={file}
                                photo={file}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage;