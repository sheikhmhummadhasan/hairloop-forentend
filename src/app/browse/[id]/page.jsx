export const instant = false;
import BrowseDetailPageClient from "@/Components/BrowseDetailPageClient";
import { getRoleById } from "@/lib/mechine";


const BrowseDetailPage = async ({ params }) => {
  const { id } = await params;
  const res = await getRoleById(id);
  console.log(res);
  return (
    <div>
      <BrowseDetailPageClient res={res} />;
    </div>
  );
};

export default BrowseDetailPage;
