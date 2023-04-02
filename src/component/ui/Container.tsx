// const Container: React.FC = ({children}:any) => {
//   return <div>{children}</div>;
// };
//
// export default Container;
//
const Container = ({ children }: any) => {
  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-10 2xl:px-12">
      {children}
    </div>
  );
};

export default Container;
