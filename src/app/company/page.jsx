export const instant = false;
import BrowseCompaniesClient from "@/Components/BrowseCompaniesClient";
import { getCompany } from "@/lib/mechine";
// import BrowseCompaniesClient from "./BrowseCompaniesClient";

const BrowseCompaniesPage = async () => {
  const company = await getCompany();

  return (
    <BrowseCompaniesClient company={company} />
  );
};

export default BrowseCompaniesPage;
