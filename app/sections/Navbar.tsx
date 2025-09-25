import Image from "next/image";
import { BarsIcon } from "../utils/icons/BarsIcon";
import Button from "../utils/components/Button";
import Link from "next/link";

export default function Navbar() {
    return(
        <section className="py-6 flex items-center justify-between">
            <div>
                <h2 className="font-bitcount text-2xl md:text-3xl flex items-center">
                    <Image src="/hummingbird.png" width={48} height={48} alt="logo"/>
                    Hummingbird
                </h2>
            </div>
            <BarsIcon />
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
        </section>
    )
};
