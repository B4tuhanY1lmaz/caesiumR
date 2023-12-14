import Header from "@/components/body/header";
import Footer from "@/components/body/footer";

export default function BlogLayout({ children }) {
    return (
        <section>
            <div className="min-h-screen">
                <div className={`py-5 px-5 sm:px-10 md:px-20 lg:px-30`}>
                    {children}
                </div>
            </div>
        </section>
    )
}
