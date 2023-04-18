import LinkIcon from "../icon/Link";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="mt-4 bg-slate-900 py-4 text-gray-100/60">
      <Container>
        <div className="flex flex-col space-y-2 px-6 py-4 text-base sm:flex-row sm:space-y-0 sm:text-lg  md:text-xl lg:px-8 xl:text-2xl 2xl:px-12">
          <div className="mt-0 flex flex-col space-y-1 sm:mr-4 md:mr-8 lg:mr-12">
            {/* <h3 className="mb-2 pb-1 text-cyan-600 border-cyan-100/30 border-b-2 pl-2 text-xl"> */}
            <h3 className="mb-1 py-1 text-lg font-semibold text-cyan-600 sm:text-2xl">
              活動資訊
            </h3>
            <div>國立臺灣大學 應用力學研究所</div>
            <div>2023 NCFD 第28屆全國計算流體力學學術研討會</div>
          </div>
          <div className="mt-0 space-y-1 ">
            <h3 className="mb-1 py-1 text-lg font-semibold text-cyan-600 sm:text-2xl">
              聯絡我們
            </h3>
            <address className="not-italic">
              臺北市大安區羅斯福路一段4號
            </address>
            <address className="group flex items-center not-italic hover:text-gray-300/80 hover:underline hover:decoration-cyan-300 hover:underline-offset-2">
              <a className="" href="tel:02-3366-5689">
                電話 : 02-3366-5689
              </a>
              <LinkIcon className="mx-2 h-4 w-4 group-hover:text-cyan-300/80 group-hover:underline group-hover:decoration-cyan-300 group-hover:underline-offset-2 " />
            </address>
            <address className="flex not-italic ">
              <a
                className="hover:text-gray-300/80 hover:underline hover:decoration-cyan-300 hover:underline-offset-2"
                href="mailto:ncfd2023@gmail.com"
              >
                Email : ncfd2023@gmail.com
              </a>
            </address>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
