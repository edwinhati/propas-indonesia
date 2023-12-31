import { Fragment } from "react";

function generateMemberId(id) {
    const idString = id.toString();
    const prefix = "PROPAS0000000";
    return prefix.substring(0, prefix.length - idString.length) + idString;
}

export default function MemberCard({ user }) {
    return (
        <Fragment>
            <div className="flex flex-col sm:flex-row gap-1">
                <div className="w-96 h-56 m-auto bg-[#0cc1e0] relative rounded-xl text-black shadow-2xl">
                    <div className="w-full flex items-center justify-between py-2">
                        <img src="/Garuda.png" className="w-12 h-12 ml-4" />
                        <div className="flex flex-col">
                            <p className="text-center text-2xl font-bold">
                                Kartu Anggota
                            </p>
                            <p className="text-center text-sm">
                                PROPAS INDONESIA
                            </p>
                        </div>
                        <img
                            className="w-12 h-12 rounded-full mr-4"
                            src="/logo.jpeg"
                            alt="Member Card"
                        />
                    </div>
                    <hr className="w-full h-1 bg-[#FFD700] border-0 rounded" />
                    <div className="flex flex-row justify-between w-full px-8 mt-12 absolute top-8">
                        <div>
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="font-light">Nomor Anggota</p>
                                    <p className="font-medium tracking-widest">
                                        {generateMemberId(user.id)}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="font-light">Nama Lengkap</p>
                                <p className="font-medium tracking-more-wider">
                                    {user.name}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center relative w-20 h-24 overflow-hidden bg-gray-100 rounded-sm dark:bg-gray-600">
                            <svg
                                className="absolute w-12 h-12 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-56 m-auto bg-[#0cc1e0] relative rounded-xl text-black shadow-2xl">
                    <h1 className="text-center text-3xl font-bold pt-4">
                        PROPAS INDONESIA
                    </h1>
                    <h2 className="text-center text-md font-bold">
                        PENOPANG PILAR KEBANGSAAN
                    </h2>
                    <div className="flex justify-center items-center mt-2">
                        <img src="/Indonesia.png" alt="" className="w-64" />
                    </div>
                    <div className="bg-[#FFD700] rounded-b-xl">
                        <div className="ml-1 mr-1 text-center text-white font-bold text-xs mt-4">
                            KEPUTUSAN MENTERI HUKUM DAN HAK ASASI MANUSIA NOMOR
                            AHU-0010955.AH.01.07. TAHUN 2023
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
