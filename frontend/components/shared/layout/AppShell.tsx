// components/shared/layout/AppShell.tsx

import Sidebar from "@/components/shared/layout/Sidebar";
import Header from "@/components/shared/layout/Header";
import Footer from "@/components/shared/layout/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <Sidebar />
      <div className="mx-auto max-w-[1600px] min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-800 md:pl-[325px] 2xl:pl-[550px] border-r border-primary-dark/30">
        <Header />
        <main className="mt-14 md:mt-0 flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
