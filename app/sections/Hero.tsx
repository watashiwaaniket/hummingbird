import Image from "next/image";
import Button from "../utils/components/Button";

export default function Hero() {
    return(
        <section className="w-full min-h-[30rem] bg-[#0F0E0E] rounded-sm mt-24 p-6 overflow-clip relative">
            <div className="relative z-20 text-neutral-100 w-96 md:w-[480px] h-full">
                <div className="grid grid-rows-2 h-full">
                    <div className="row-span-1 flex flex-col gap-4">
                        <h2 className="text-neutral-500 font-bitcount text-xl sm:text-2xl">
                            HUMMINGBIRD
                        </h2>
                        <p className="text-neutral-50 font-ibm-plex font-semibold text-3xl sm:text-4xl tracking-tight sm:tracking-normal">
                            The Ultimate <br /> Intelligence Model
                        </p>
                    </div>
                    <div className="row-span-1 flex flex-col gap-4 justify-end items-baseline pr-20 sm:pr-0">
                        <p className="sm:text-lg w-80 md:w-96">
                        Hummingbird is an org which fosters the best ai and ml researchers on this planet, united for a cause of bringing forth the AGI and the era of ultimate intelligence.
                        </p>
                        <Button label="GET STARTED" type="primary"/>
                    </div>
                </div>
            </div>
            <Image src={'/cms-higgs-event.png'} width={1000} height={1000} alt="banner" className="absolute top-[-30%] right-[-10%] z-20 hidden md:block"/>
            <div className="absolute top-[-100%] left-0 h-[2000px] w-[1000px] rounded-full bg-[radial-gradient(circle_600px_at_30%_500px,#262626,#0F0E0E)] z-[0]" />
        </section>
    )
};