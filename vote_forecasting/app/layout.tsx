import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fully Homomorphic Encryption",
  description: "Bside Tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <header className="section-padding m-0 sticky top-0 bg-slate-800 text-white">
      <div className="flex items-center justify-between max-w-screen-lg m-auto">
        <h3>
          <a href="/">Bside Korea TIPS</a>
        </h3>
        <div className="flex gap-8">
          <h4>
            <a href={"/"}>Overview</a>
          </h4>
          <h4>
            <a href={"runfhe"}>Run</a>
          </h4>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-800 h-64">
      <div className="p-4 md:p-12 max-w-screen-lg m-auto">
        <ul className="col text-white">
          <li>bside.ai</li>
          <li>
            <a
              href="https://corp.bside.ai/"
              target="_blank"
              className="opacity-80 hover:opacity-100"
            >
              회사 소개
            </a>
          </li>
          <li>
            <a
              href="https://bside.ai/"
              target="_blank"
              className="opacity-80 hover:opacity-100"
            >
              캠페인
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
