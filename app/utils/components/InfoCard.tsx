import Image from "next/image";
import Link from "next/link";

export interface InfoCardProps{
    avatar : string;
    name : string;
    designation : string;
    xacc : string;
}

export default function InfoCard({avatar, name, designation, xacc} : InfoCardProps) {
    return(
        <Link href={xacc}>
            <div className="flex gap-2 bg-neutral-900 p-2 w-72 rounded-sm">
                <Image src={avatar} alt="avatar icon" width={52} height={52} className="rounded-sm"/>
                <div>
                    <h2 className="text-base">{name}</h2>
                    <p className="text-sm text-neutral-500 font-bitcount">
                        {designation}
                    </p>
                </div>
            </div>
        </Link>
    )
};
