import Head from "next/head";
// import { Inter } from "next/font/google";
import AppLayout from "@/component/layouts/AppLayout";
import HomePage from "@/view/home/Home";
import Container from "@/component/ui/Container";
// const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      {/* <Container> */}
      <HomePage />
      {/* </Container> */}
    </>
  );
};

Home.Layout = AppLayout;

export default Home;
