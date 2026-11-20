export const instant = false;
import BrowseCompaniesClient from "@/Components/BrowseCompaniesClient";
import { auth } from "@/lib/auth";
import { getCompany } from "@/lib/mechine";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const BrowseCompaniesPage = async () => {
  const company = await getCompany();

  const session = await auth.api.getSession({
      headers: await headers()
    })
  
    if(!session){
      redirect('/signin')
    }

  return (
    <BrowseCompaniesClient company={company} />
  );
};

export default BrowseCompaniesPage;
