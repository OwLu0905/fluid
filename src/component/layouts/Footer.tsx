import LinkIcon from "../icon/Link";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="text-gray-100/60 bg-slate-900 py-4 mt-4">
      <Container>
        <div className="px-6 lg:px-8 2xl:px-12 py-4 flex flex-col space-y-2 sm:space-y-0 sm:flex-row text-[12px] sm:text-base ">
          <div className="flex flex-col mt-0 space-y-1 sm:mr-4 md:mr-8 lg:mr-12">
              {/* <h3 className="mb-2 pb-1 text-cyan-600 border-cyan-100/30 border-b-2 pl-2 text-xl"> */}
            <h3 className="font-semibold text-cyan-600 text-lg mb-1 sm:text-2xl py-1">活動資訊</h3>
            <div>
              國立臺灣大學 應用力學研究所 
            </div>
            <div>2023 NCFD 第28屆全國計算流體力學學術研討會</div>
          </div>
          <div className="mt-0 space-y-1 ">
            <h3 className="font-semibold text-cyan-600 text-lg mb-1 sm:text-2xl py-1">聯絡我們</h3>
            <address className="not-italic">
              臺北市大安區羅斯福路一段4號
            </address>
            <address className="flex items-center not-italic group hover:text-gray-300/80 hover:underline hover:underline-offset-2 hover:decoration-cyan-300">
              <a className="" href="tel:02-3366-5689">電話 : 02-3366-5689</a>
              <LinkIcon className="w-4 h-4 mx-2 group-hover:text-cyan-300/80 group-hover:underline group-hover:underline-offset-2 group-hover:decoration-cyan-300 " />
            </address>
            <address className="flex not-italic ">
              <a className="hover:text-gray-300/80 hover:underline hover:underline-offset-2 hover:decoration-cyan-300" href="mailto:ncfd2023@gmail.com">Email : ncfd2023@gmail.com</a>
            </address>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
