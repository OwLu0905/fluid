import Image from "next/image";

const HomePage = () => {
  return (
    <section className="mx-auto block w-full text-white">
      <h1 className="pb-4 text-3xl">Fluids Engineering Conference</h1>
      {/* <Image
        src="/banner/ajk_banner.png"
        width={1250}
        height={420}
        style={{ objectFit: "scale-down" }}
        alt="conference"
        priority={true}
        className="block mx-auto"
      /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat
        aliquam distinctio, suscipit qui quaerat nobis natus animi porro? Rerum.
      </p>
    </section>
  );
};

export default HomePage;
