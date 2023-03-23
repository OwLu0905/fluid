// const Container: React.FC = ({children}:any) => {
//   return <div>{children}</div>;
// };
//
// export default Container;
//
const Container = ({ children }: any) => {
  return (
    <div className="mx-auto max-w-[1920px] px-8 md:px-8 lg:px-16 2xl:px-16">
      {children}
    </div>
  );
};

export default Container;
