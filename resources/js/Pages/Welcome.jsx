import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import Content from "@/Components/Content";
import Gallery from "@/Components/Gallery";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";

export default function Welcome({ auth, news }) {
    return (
        <>
            <Header auth={auth} />
            <Head title="Welcome" />
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-64 mx-auto">
                <img
                    src="/carousel.jpeg"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-right md:object-center"
                />{" "}
            </div>
            <Content />
            <div className="p-4 mx-auto">
                <video className="w-full" controls>
                    <source
                        src="https://propasindonesia.s3.ap-southeast-1.amazonaws.com/video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Gallery
                images={[
                    "https://propasindonesia.s3.ap-southeast-1.amazonaws.com/sertifikasi/1.jpeg",
                    "https://propasindonesia.s3.ap-southeast-1.amazonaws.com/sertifikasi/2.jpeg",
                    "https://propasindonesia.s3.ap-southeast-1.amazonaws.com/sertifikasi/3.jpeg",
                    "https://propasindonesia.s3.ap-southeast-1.amazonaws.com/sertifikasi/4.jpeg",
                    "https://propasindonesia.s3.ap-southeast-1.amazonaws.com/sertifikasi/5.jpeg",
                    "https://propasindonesia.s3.ap-southeast-1.amazonaws.com/sertifikasi/6.jpeg",
                ]}
            />
            <Blog posts={news} />
            <Footer />

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
