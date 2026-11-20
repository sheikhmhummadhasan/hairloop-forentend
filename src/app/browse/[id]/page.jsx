export const instant = false;
import BrowseDetailPageClient from "@/Components/BrowseDetailPageClient";
import { auth } from "@/lib/auth";
import { getRoleById } from "@/lib/mechine";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


const BrowseDetailPage = async ({ params }) => {
  const { id } = await params;
  const res = await getRoleById(id);
  
  const session = await auth.api.getSession({
      headers: await headers()
    })
  
    if(!session){
      redirect('/signin')
    }
  return (
    <div>
      <BrowseDetailPageClient  res={res} />;
    </div>
  );
};

export default BrowseDetailPage;
