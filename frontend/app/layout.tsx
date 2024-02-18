import "./globals.css";
import { Noto_Sans, Roboto_Slab } from "next/font/google";
import { getSiteData } from "../lib/sanityQueries";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Providers from "@/providers";
import Header from "@/components/layout/Header";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal']
})

export async function generateMetadata() {
  // const { title, description } = await getSiteMetaData();
  // return {
  //   title,
  //   description,
  // };
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
      <body className={`${notoSans.variable} ${robotoSlab.variable} font-sans scrollbar`}>
        <Providers>
          <div className="flex min-h-screen relative">
            <Sidebar />
            <div className="relative z-0 ml-0 sm:ml-[325px] 2xl:ml-[550px] flex-1 bg-zinc-100 dark:bg-zinc-800 flex flex-col h-screen transition transition-all ease-in-out duration-300">
              <Header />
              <main className="px-8 py-4 flex-1">
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
