import Image from "next/image";
import React from "react";

export interface ButtonProp{
    label : string;
    serial ?: string;
    icon ?: string;
    type : "label" | "primary";
}

export default function Button({label, serial, icon, type} : ButtonProp) {
    return(
        <button className={`
            px-4 py-2 text-lg rounded-sm font-medium tracking-tight flex items-center justify-between min-w-full sm:min-w-48 hover:cursor-pointer 
            ${type == "label" ? 'bg-neutral-900' : ''}
            ${type == "primary" ? 'bg-neutral-100 text-neutral-950' : ''}
        `}>
            <div>
                {label}
            </div>
            <div className={`
                    font-bitcount text-xl text-neutral-500 pl-12
                    ${type == "label" ? '' : 'hidden'}
                `}>
                {serial}
                
            </div>
            <div className={`
                    font-bitcount text-xl text-neutral-500 pl-6
                    ${type == "primary" ? '' : 'hidden'}
                `}>
                <Image src={icon == undefined ? '/r-arrow.svg' : icon} width={24} height={24} alt="btn-icon" />
            </div>
        </button>
    )
};
