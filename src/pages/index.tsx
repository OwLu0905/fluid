import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import AppLayout from "@/component/layouts/AppLayout";
import HomePage from "@/view/home/Home";
import Container from "@/component/ui/Container";
// import styles from "@/styles/Home.module.css";
// import { AppLayout } from "src/component/layouts/AppLayout";

// const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Container>
        <HomePage />
      </Container>
    </>
  );
};

Home.Layout = AppLayout;

export default Home;
