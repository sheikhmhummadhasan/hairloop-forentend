import "server-only";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
};

export const requireMentRole = async (role) => {
  const user = await getUserSession();

  if (!user) {
    redirect("/signin");
  }

  if (user.role !== role) {
    redirect("/unauthorized");
  }

  return user;
};