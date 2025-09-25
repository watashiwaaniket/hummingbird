import HeroCard from "../utils/components/HeroCard";
import InfoCard from "../utils/components/InfoCard";

export default function Hero() {
    return(
        <section className="mt-24">
        <HeroCard 
            header="HUMMINGBIRD"
            titles1="The Ultimate"
            titles2="Intelligence Model"
            desc="Hummingbird is an org which fosters the best ai and ml researchers on this planet, united for a cause of bringing forth the AGI and the era of ultimate intelligence."
            buttonlabel="GET STARTED"
            imagesrc="/cms-higgs-event.png"
        />
        <div className="py-6">
            <p className="text-sm text-neutral-500 font-bitcount">Proud to be run by cracked devs.</p>
        </div>
        <div className="flex">
            <InfoCard name="Hisukurifu" avatar="/hisukurifu.jpeg" designation="Design Engineer"/>
        </div>
        <div className="py-8">
            <HeroCard
                header="PRIME RESPONSE"
                titles1="Smart. Logical. Fast"
                titles2="Empowered with Pre-trained Models."
                desc="We use powerful conventional models fine tuned into research ready LLM models. The authenticity of your favourate models paired with our though process."
                buttonlabel="INITIATE CHAT"
                imagesrc="/random-nodes.png"
            />
        </div>
        </section>
    )
};