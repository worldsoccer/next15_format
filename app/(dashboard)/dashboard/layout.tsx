import { SiteFooter } from "@/components/footer/site-footer";
import { DashboardNav } from "@/components/nav/dashboard-nav";
import MainNav from "@/components/nav/main-nav";
import UserNav from "@/components/nav/user-nav";
import { dashboardConfig } from "@/config/dashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <div className='flex min-h-screen flex-col space-y-6'>
      <header className='sticky top-0 z-40 border-b bg-background'>
        <div className='container flex items-center justify-between py-4 h-16'>
          <MainNav items={dashboardConfig.mainNav} />
          <UserNav session={session} />
        </div>
      </header>
      <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
        <aside className='hidden md:flex w-[200px] flex-col'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className='flex flex-col w-full flex-1 overflow-hidden'>{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
