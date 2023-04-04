import Image from "next/legacy/image";
import MobileNav from "../sidebar/MobileNav";
import Navlist from "../sidebar/Navlist";
import Container from "../ui/Container";
import Footer from "./Footer";
const AppLayout: React.ElementType = ({ children }: any) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black to-indigo-900/90">
        {/* <div className="flex min-h-screen flex-col bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900"> */}
        <MobileNav />
        <div className="mx-auto mb-6 block md:mb-10 md:hidden">
          <Image
            src="./banner/web_mobile_v1-min.jpg"
            width={1900}
            height={600}
            alt="第28屆全國計算流體力學學術研討會"
            priority={true}
            className="mx-auto block object-cover object-top"
          />
        </div>
        <div className="mx-auto mb-6 hidden md:mb-10 md:block">
          <Image
            src="./banner/NCFD_v7-min.jpeg"
            width={1920}
            height={570}
            alt="第28屆全國計算流體力學學術研討會"
            priority={true}
            className="mx-auto block object-cover object-top"
          />
        </div>
        <div className=" grow ">
          <Container>
            <div className="grid grid-cols-12 gap-x-2 gap-y-6 rounded-md bg-gray-800/60 px-6 py-6 shadow-2xl md:gap-x-2 md:py-10 lg:gap-x-2">
              <div className="order-2 col-span-12  lg:col-span-3 ">
                <div className="mx-2 hidden rounded-lg px-2 py-2 text-sky-600 shadow-xl md:px-0 md:py-6 lg:order-1 lg:block lg:px-2">
                  <Navlist />
                </div>
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
