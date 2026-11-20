export const instant = false;
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  getApplicationDataByUserID,
  getapplicationPendingData,
  getApplicationRejectionDataByUserID,
  getOfferd,
} from "@/lib/mechine";
import MyApplications from "@/Components/MyApplications";

const ApplicationDashbord = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userID = session?.user?.id;
  const resById = await getApplicationDataByUserID(userID);
  const resForRejection = await getApplicationRejectionDataByUserID(userID);
  const getOffer = await getOfferd(userID);
  const getPending = await getapplicationPendingData(userID);

  
  return <div>
    <MyApplications 
    getPending={getPending} 
    getOffer={getOffer} 
    resForRejection={resForRejection} 
    resById={resById} 
    />
  </div>;
};

export default ApplicationDashbord;
