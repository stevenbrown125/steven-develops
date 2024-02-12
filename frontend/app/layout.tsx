import "./globals.css";
import { Noto_Sans, Roboto_Slab } from "next/font/google";
import { getSiteData, getSiteMetaData } from "./lib/sanityQueries";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Providers from "@/providers";
import Header from "@/components/Header";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
})

export async function generateMetadata() {
  const { title, description } = await getSiteMetaData();
  return {
    title,
    description,
  };
}

async function getSiteInfo() {
  const { title, description, logo } = await getSiteData();
  return {
    title,
    description,
    logo,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteInfo = await getSiteInfo();
  return (
    <html lang="en" className="dark">
      <body className={`${notoSans.variable} ${robotoSlab.variable} font-sans bg-zinc-800`}>
        <Providers>
          <div className="flex min-h-screen relative">
            <Sidebar />
            <div className="relative z-0 ml-[325px] flex-1 bg-white dark:bg-zinc-800 flex flex-col h-screen">
              <Header />
              <main className="px-8 flex-1 animate-fade-in-slide-down">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
