import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function Header({ auth }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">PROPAS INDONESIA</span>
                        <img className="h-9 w-auto" src="/logo.jpeg" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Beranda
                    </a>
                    <Link
                        href="/organisasi"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Organisasi
                    </Link>
                    <a
                        href="#news"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Berita
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Dashboard <span aria-hidden="true">&rarr;</span>
                        </Link>
                    ) : (
                        <div className="flex gap-2">
                            <Link
                                href={route("register")}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Daftar
                            </Link>
                            <Link
                                href={route("login")}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Masuk
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">PROPAS INDONESIA</span>
                            <img
                                className="h-9 w-auto"
                                src="/logo.jpeg"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Beranda
                                </a>
                                <Link
                                    href="/organisasi"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Organisasi
                                </Link>
                                <a
                                    href="#news"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Berita
                                </a>
                            </div>
                            <div className="py-6">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Dashboard{" "}
                                        <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                ) : (
                                    <div className="flex gap-2">
                                        <Link
                                            href={route("register")}
                                            className="text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            Daftar
                                        </Link>
                                        <Link
                                            href={route("login")}
                                            className="text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            Masuk
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
