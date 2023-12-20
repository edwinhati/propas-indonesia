import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";

export default function Content() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg
                        x="50%"
                        y={-1}
                        className="overflow-visible fill-gray-50"
                    >
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                    />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">
                                PROPAS INDONESIA
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Selayang pandang
                            </h1>
                            {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                                Aliquet nec orci mattis amet quisque ullamcorper
                                neque, nibh sem. At arcu, sit dui mi, nibh dui,
                                diam eget aliquam. Quisque id at vitae feugiat
                                egestas.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="hidden w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:flex sm:w-[57rem]"
                        src="/Ketum.jpg"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-justify text-gray-700 lg:max-w-lg">
                            <p>
                                Keterlibatan masyarakat dalam menyongsong pesta
                                demokrasi pemilihan presiden tahun 2024 adalah
                                sebuah harapan sekaligus semangat untuk
                                melibatkan semua elemen anak bangsa dalam derap
                                langkah dan dinamika demokrasi yang bermartabat
                                dan mampu menghasilkan pemimpin bangsa yang
                                diharapkan para pendiri bangsa.
                            </p>
                            {/* <ul
                                role="list"
                                className="mt-8 space-y-8 text-gray-600"
                            >
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Push to deploy.
                                        </strong>{" "}
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            SSL certificates.
                                        </strong>{" "}
                                        Anim aute id magna aliqua ad ad non
                                        deserunt sunt. Qui irure qui lorem
                                        cupidatat commodo.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon
                                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900">
                                            Database backups.
                                        </strong>{" "}
                                        Ac tincidunt sapien vehicula erat auctor
                                        pellentesque rhoncus. Et magna sit morbi
                                        lobortis.
                                    </span>
                                </li>
                            </ul> */}
                            <p className="mt-8">
                                Semangat patriotik elemen masyarakat suatu
                                bangsa pada umumnya terhimpun dalam Organisasi
                                Masyarakat yang berorientasi pada kerja politik.
                                Salah satu organisasi masyarakat tersebut adalah
                                Propas Indonesia. Partisipasi Propas Indonesia
                                saat ini adalah menjadi bagian dari team
                                pemenangan calon presiden dan wakil presiden,
                                khususnya Bapak Let.Jend. TNI (Pun) H. Prabowo
                                Subianto Djojohadikusumo dan Bapak Gibran
                                Rakabuming Raka yang telah resmi mendaftarkan
                                diri sebagai pasangan calon presiden dan wakil
                                presiden untuk pemilihan presiden pada 14
                                Februari 2024 mendatang.
                            </p>
                            <p className="mt-8">
                                Untuk mengoptimalkan potensi dan peran
                                masyarakat yang memiliki kesamaan pikiran agar
                                Indonesia dapat dipimpin oleh sosok pemimpin
                                yang tegas, berkarakter, nasionalis, paham
                                strategi dan geo politik kawasan, visioner,
                                mampu menjaga persatuan, patriot dan
                                berorientasi pada kepentingan rakyat serta
                                kolaborasi antara generasi post millennial dan
                                generasi millennial untuk kesinambungan dan
                                regenerasi kepemimpinan masa depan, maka
                                dipandang perlu untuk dibentuknya sebuah
                                Organisasi Masyarakat atau ormas bernama RELAWAN
                                PRO PRABOWO SUBIANTO.
                            </p>
                            <p className="mt-8">
                                Organisasi PROPAS, didirikan sebagai wadah
                                berhimpun nya masyarakat dari seluruh pelosok
                                negeri yang berafiliasi akan kepentingan
                                kemenangan Bapak Let.Jend. TNI (Pun) H. Prabowo
                                Subianto Djojohadikusumo dan Bapak Gibran
                                Rakabuming Raka, untuk bersinergi dan bergerak
                                bersama seluruh elemen dan unsur pemenangan,
                                meminta mandat dari rakyat Indonesia demi
                                menghantarkan kedua putera terbaik bangsa ini
                                untuk duduk pada tampuk kekuasaan tertinggi
                                pemimpin negeri, sehingga dapat menyongsong
                                INDONESIA EMAS 2045 yang dibingkai dalam
                                kemajuan di segala bidang.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                Drs. SINDU TIKNO S. M.Si.(Han)
                            </h2>
                            <p>KETUA UMUM PROPAS INDONESIA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
