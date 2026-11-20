export const instant = false;
import { headers } from 'next/headers';
import NoCompany from "@/Components/dashbordComp/NoCompany";
import { auth } from "@/lib/auth";
import { getCompanyById } from "@/lib/mechine";
import AvablavelCompany from '@/Components/dashbordComp/AvablavleCompany';

const Company = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const id = session?.user?.id
  const company = await getCompanyById(id);
  console.log(company)

  return (
    <div>
      {company  ? <AvablavelCompany company={company}/> : <NoCompany/>}
    </div>
  );
};

export default Company;
