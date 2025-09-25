"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarsIcon } from "../utils/icons/BarsIcon";
import Button from "../utils/components/Button";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <section className="py-6 bg-black fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
            <div className="flex items-center justify-between w-screen lg:w-[1400px] px-3 md:px-5">
                <div>
                    <h2 className="font-bitcount text-2xl md:text-3xl flex items-center">
                        <Image src="/hummingbird.png" width={48} height={48} alt="logo"/>
                        Hummingbird
                    </h2>
                </div>

                <button
                    aria-label="Open navigation menu"
                    className="md:hidden"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <BarsIcon />
                </button>

                <div className="md:flex items-center hidden gap-3">
                    <div className="lg:flex gap-3 hidden">
                        <Button label="COMPUTE" serial="01" type="label"/>
                        <Button label="RESEARCH" serial="02" type="label"/>
                        <Button label="ENVIRONMENTS" serial="03" type="label" icon="/r-arrow.svg"/>
                    </div>
                    <div className="flex gap-3 items-center ml-8">
                        <Link href={'/'}><p>Blog</p></Link>
                        <Link href={'/'}><p>Login</p></Link>
                        <Link href={'/'}><Button label="GET STARTED" type="primary" /></Link>
                    </div>
                </div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="mobile-drawer"
                        initial={{ height: 0, opacity: 0, y: -8 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -8 }}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        className="md:hidden absolute left-0 right-0 top-full"
                    >
                        <div className="mt-4 mx-4 flex flex-col gap-3 bg-black/60 backdrop-blur border border-neutral-800 rounded-md p-3 shadow-2xl">
                            <Link href={'/'} onClick={() => setIsOpen(false)}>
                                <Button label="COMPUTE" serial="01" type="label" />
                            </Link>
                            <Link href={'/'} onClick={() => setIsOpen(false)}>
                                <Button label="RESEARCH" serial="02" type="label" />
                            </Link>
                            <Link href={'/'} onClick={() => setIsOpen(false)}>
                                <Button label="ENVIRONMENTS" serial="03" type="label" icon="/r-arrow.svg" />
                            </Link>
                            <Link href={'/'} onClick={() => setIsOpen(false)}>
                                <Button label="Blog" type="label" />
                            </Link>
                            <Link href={'/'} onClick={() => setIsOpen(false)}>
                                <Button label="Login" type="label" />
                            </Link>
                            <Link href={'/'} onClick={() => setIsOpen(false)}>
                                <Button label="GET STARTED" type="primary" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
};
