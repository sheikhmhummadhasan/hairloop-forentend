'use server'
import { headers } from "next/headers";
import { auth } from "./auth";

export const getUserToken = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log( 'token of user',session?.session?.token)

  return session?.session?.token || null;
};
