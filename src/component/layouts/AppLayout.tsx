import Head from "next/head";
import Image from "next/legacy/image";
import MobileNav from "../sidebar/MobileNav";
import Navlist from "../sidebar/Navlist";
import Container from "../ui/Container";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const AppLayout: React.ElementType = ({ children }: any) => {
  return (
    <>
      {/* <div className="bg-gradient-to-r  from-indigo-900 via-slate-800 to-indigo-900 min-h-screen flex flex-col"> */}
      {/* <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900/90 min-h-screen flex flex-col"> */ }
        {/* <div className="bg-no-repeat bg-[url('../assets/bg.png')] min-h-screen flex flex-col"> */}
      <div className="bg-black to-indigo-900/90 min-h-screen flex flex-col">
        <MobileNav />
        {/*<div className="p-2 md:p-6 lg:px-12 lg:py-10 mx-auto "> */}
        <div className="mx-auto mb-8 md:mb-10">
          <Image
            src="./banner/NCFD_v5.jpeg"
            width={1920}
            height={570}
            alt="第28屆全國計算流體力學學術研討會"
            priority={true}
            className="mx-auto object-cover object-top block w-full"
          />
        </div>
        <div className=" grow">
          <Container>
            {/* bg-gray-900/60 */}
            <div className="bg-gray-800/60 rounded-md p-6 shadow-2xl grid grid-cols-12 gap-x-2 md:gap-x-2 lg:gap-x-6 gap-y-6">
              {/* <div className="bg-stone-800/60 rounded-md p-6 shadow-2xl grid grid-cols-12 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-6"> */}
              <div className="order-2 col-span-12 md:col-span-4">
                <div className="hidden md:order-1 md:block px-2 py-2 md:px-0 md:py-6 lg:px-4 text-sm md:text-base rounded-lg shadow-xl text-sky-600">
                  <Navlist />
                </div>
                <Sidebar />
              </div>
              <div className="order-1 md:order-2 col-span-12 md:col-span-8 ">
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
