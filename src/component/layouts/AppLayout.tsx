import Image from "next/legacy/image";
import MobileNav from "../sidebar/MobileNav";
import Navlist from "../sidebar/Navlist";
import Container from "../ui/Container";
import Footer from "./Footer";
import Link from "next/link";
const AppLayout: React.ElementType = ({ children }: any) => {
  return (
    <>
      <div className="bg flex min-h-screen flex-col bg-black to-indigo-900/90">
        {/* <div className="flex min-h-screen flex-col bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900"> */}
        <MobileNav />
        {/* <div className="mx-auto mb-0 flex flex-col items-center justify-center bg-white font-mono md:hidden ">
          <div className="z-[2] -mb-8 mt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[2.5rem] font-black text-sky-500">NCFD</h3>
              <time className="font-extrabold text-gray-400">
                <p>8月17-18, 2023,</p>
                <p>臺北, 北投</p>
              </time>
            </div>
            <h4 className="text-[1rem] font-medium text-sky-600">
              第28屆全國計算流體力學學術研討會暨
            </h4>
            <h4 className="text-[1rem] font-medium text-sky-600">
              第2屆臺灣流體力學學會年會
            </h4>
          </div>
          <Image
            src="./banner/test2.png"
            width={1900}
            height={800}
            alt="第28屆全國計算流體力學學術研討會"
            priority={true}
            className="mx-auto block object-cover object-bottom"
          />
        </div> */}

        <div
          className="mx-auto mb-6 mt-1 block md:mb-10 md:hidden"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          <Image
            src="./banner/NCFD_web_mobile_v4.jpg"
            width={1900}
            height={600}
            alt="第28屆全國計算流體力學學術研討會"
            priority={true}
            className="mx-auto block object-cover object-top"
          />
        </div>
        <div
          className="mx-auto mb-6 hidden md:mb-10 md:block"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {/* <Link href="/"> */}
          <Image
            src="./banner/NCFD_web_whitetop_v9.jpg"
            width={1920}
            height={620}
            // height={570}
            alt="第28屆全國計算流體力學學術研討會"
            priority={true}
            className="mx-auto block object-cover object-top"
          />
          {/* </Link> */}
        </div>
        <div className=" grow ">
          <Container>
            <div className="grid grid-cols-12 gap-x-2 gap-y-6 rounded-md bg-gray-800/60 px-6 py-6 shadow-2xl md:gap-x-2 md:py-10 lg:gap-x-2">
              <div className="order-2 col-span-12  lg:col-span-3 ">
                <aside className="mx-2 hidden rounded-lg px-2 py-2 text-sky-600 shadow-xl md:px-0 md:py-6 lg:order-1 lg:block lg:px-2">
                  <Navlist />
                </aside>
                {/* <Sidebar /> */}
              </div>
              <div className="order-1 col-span-12 lg:order-2  lg:col-span-9">
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
