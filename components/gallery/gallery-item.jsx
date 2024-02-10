import Image from "next/image"

function GalleryItem({ photo }) {
    return (
        <div className="flex justify-center flex-wrap">
            <a href={`/cdn/gallery/${photo}`} className="p-3">
                <Image
                    src={`/cdn/gallery/${photo}`}
                    height={360}
                    width={640}
                    alt={photo}
                    className="block rounded-2xl object-cover object-center hover:scale-110 transition duration-200"
                />
            </a>
        </div>
    )
}

export default GalleryItem