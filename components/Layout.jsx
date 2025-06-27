'use client';

import { Sora } from "next/font/google";
import Head from "next/head";
import { usePathname } from "next/navigation";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font family
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";

  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative ${isAboutPage ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden"
        }`}
    >
      {/* metadata */}
      <Head>
        <title>Alfredo Allan | Portfolio</title>
        <meta
          name="description"
          content="Alfredo Allan Full-stack desenvolvedor web."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Alfredo Allan" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
