import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-neutral-900 w-96 h-30 flex flex-col justify-center rounded-sm items-center text-center text-xl gap-3">
        <h2 className="tracking-tighter text-neutral-400 flex items-center -ml-3">
          <Image src='/hummingbird.png' height={36} width={36} alt="logo"/>
          HUMMINGBIRD
        </h2>
        <p className="w-full border-t border-dashed border-neutral-600 text-[22px] text-neutral-500 pt-2">coming soon</p>
      </div>
    </div>
  );
}
