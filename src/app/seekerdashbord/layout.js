import SeekerDashboardShell from "@/Components/SeekerDashboardShell";
import { requireMentRole } from "@/lib/authorizetion";

const SeekerDashboardLayout = async ({ children }) => {
  await requireMentRole("seeker");

  return <SeekerDashboardShell>{children}</SeekerDashboardShell>;
};

export default SeekerDashboardLayout;