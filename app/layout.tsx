import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from "./components/common/Header";
import { KakaoButton } from './components/common/KakaoButton';
import { Footer } from './components/common/Footer';
import { FloatingButtons } from './components/common/FloatingButtons';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CCTV Service",
  description: "Professional CCTV installation and maintenance services",
};

// ChakraProvider를 위한 클라이언트 컴포넌트
const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={inter.variable}>
      <body>
        <ChakraProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <FloatingButtons />
        </ChakraProvider>
      </body>
    </html>
  );
};

// 메인 레이아웃 (서버 컴포넌트)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
