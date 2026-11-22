export const instant = false;
import Billing from "@/Components/Billing";
import { auth } from "@/lib/auth";
import { getHistyoyById } from "@/lib/mechine";
import { headers } from "next/headers";
import React from "react";

const BillingPageSurver = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const userID = session?.user?.id
  const history = await getHistyoyById(userID)
  return (
    <div>
      <Billing history={history}/>
    </div>
  );
};

export default BillingPageSurver;
