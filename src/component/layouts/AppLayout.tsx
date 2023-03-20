import Head from "next/head";
import Image from "next/image";
import MobileNav from "../sidebar/MobileNav";
import Navlist from "../sidebar/Navlist";
import Container from "../ui/Container";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const AppLayout: React.ElementType = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Fluid</title>
        <meta name="description" content="conference" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** <Header> */}
      {/* <div className="bg-gradient-to-r from-[#001839]  to-[#001839]/90 min-h-screen flex flex-col"> */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 min-h-screen flex flex-col">
        <MobileNav />
        <Image
          src="/banner/ajk_banner.png"
          width={1250}
          height={420}
          style={{ objectFit: "scale-down" }}
          alt="conference"
          priority={true}
          className="block mx-auto pb-2 md:pb-4 lg:pb-6"
        />
        <div className=" grow">
          <Container>
            <div className="bg-gray-900/60 rounded-md p-6 shadow-2xl grid grid-cols-12 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-6">
              <div className="col-span-12 md:col-span-4">
                <div className="hidden md:block px-4 py-4 md:px-8 md:py-6 lg:px-12 text-sm md:text-base rounded-lg shaodw-xl text-sky-600">
                  <Navlist />
                </div>
                <Sidebar />
              </div>
              <div className="col-span-12 md:col-span-8 ">
                <main className="">{children}</main>
              </div>
            </div>
          </Container>
        </div>
        {/** <Footer> */}
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
