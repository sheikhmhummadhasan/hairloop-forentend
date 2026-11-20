export const instant = false;

import { redirect } from "next/navigation";
import Link from "next/link";
import { stripe } from "../../lib/stripe";
import {
  CheckCircle2,
  ArrowRight,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { paymentHistory } from "@/lib/mechine";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Success({ searchParams }) {
  const user = await auth.api.getSession({
    headers: await headers(),
  });

  const userData = user?.user?.id;

  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (!session || session.status !== "complete") {
    redirect("/");
  }

  const {
    amount_subtotal,
    amount_total,
    created,
    currency,
    customer,
    customer_details,
    mode,
    payment_method_types,
    payment_status,
    subscription,
    id,
  } = session;

  const payment_history = {
    sessionId: id,
    amount_subtotal,
    amount_total,
    amount: amount_total / 100,
    currency,
    customer,
    customer_details,
    mode,
    payment_method_types,
    payment_status,
    subscription,
    userData,
    paymentDate: new Date(created * 1000),
    isTestMode: !session.livemode,
  };

  if (userData && payment_status === "paid") {
    await paymentHistory(payment_history);
  }

  const customerEmail = customer_details?.email;

  return (
    <main className="min-h-screen bg-[#09090b] flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-800 bg-[#111113] p-8 sm:p-12 text-center shadow-2xl">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">
          <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
            <CheckCircle2
              size={52}
              className="text-emerald-400"
              strokeWidth={1.5}
            />
          </div>

          <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-emerald-400">
            <Sparkles size={16} />
            Payment Completed
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Payment Successful!
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-7 text-zinc-400">
            Thank you for your purchase. Your payment has been processed
            successfully. We are excited to have you onboard!
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 text-left">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-800">
                <Mail size={20} className="text-zinc-300" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-zinc-500">
                  Confirmation email
                </p>

                <p className="mt-1 break-all text-sm font-medium text-white">
                  {customerEmail || "Email not available"}
                </p>
              </div>
            </div>
          </div>

          {session.livemode === false && (
            <p className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-3 text-xs text-yellow-400">
              Test Mode: No real money was charged.
            </p>
          )}

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <ShieldCheck size={15} className="text-emerald-400" />
            Secure payment processed by Stripe
          </div>

          <Link
            href="/"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-zinc-200"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>

          <p className="mt-5 text-xs text-zinc-600">
            Need help? Contact our support team.
          </p>
        </div>
      </div>
    </main>
  );
}