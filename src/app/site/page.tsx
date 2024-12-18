import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-full w-full bg-white pt-36 flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_34px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        </div>
        <p className="text-center">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="text-9xl font-bold text-center md:text-[100px]">
              Hypercore
            </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image src={'/assets/preview.png'} alt="banner img" height={1200} width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%]"></div>
        </div>
      </section>
    </>
  );
}
