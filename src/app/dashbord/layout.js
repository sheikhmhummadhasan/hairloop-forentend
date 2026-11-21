import Link from "next/link";
import { Plus } from "lucide-react";
import { SidebarContent } from "@/Components/dashbordComp/SidebarContent";
import DashboardHeader from "@/Components/dashbordComp/DashboardHeader";
import { requireMentRole } from "@/lib/authorizetion";


const DashboardLayout = async ({ children }) => {
  const requireRole = await requireMentRole('recruiter')
  return (
    <div className="min-h-screen bg-[#121212] text-white">

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[220px] flex-col border-r border-[#303030] bg-[#141414] md:flex">
        <SidebarContent />
      </aside>

      <div className="min-h-screen md:ml-[220px]">

        <DashboardHeader />

        <main className="mx-auto min-h-[calc(100vh-68px)] w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        <Link
          href="/dashbord/jobs"
          aria-label="Add a job"
          className="fixed bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105"
        >
          <Plus size={22} />
        </Link>

      </div>
    </div>
  );
};

export default DashboardLayout;