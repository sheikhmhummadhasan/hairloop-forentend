"use client";
import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, Crown, Zap } from "lucide-react";

const seekerPlans = [
  {
    _id: "starter",
    name: "Starter",
    icon: Sparkles,
    price: "0",
    popular: false,
    features: [
      "Create professional profile",
      "Browse unlimited job listings",
      "Apply for 5 jobs per month",
      "Basic job recommendations",
      "Save favorite jobs",
    ],
  },
  {
    _id: "grouth",
    name: "Growth",
    icon: Zap,
    price: "5",
    popular: true,
    features: [
      "Everything in Starter",
      "Unlimited job applications",
      "AI-powered job matching",
      "Advanced job recommendations",
      "Resume visibility boost",
      "Application tracking",
      "Verified salary insights",
    ],
  },
  {
    _id: "premium",
    name: "Premium",
    icon: Crown,
    price: "10",
    popular: false,
    features: [
      "Everything in Growth",
      "AI resume optimization",
      "Personalized career insights",
      "Priority profile visibility",
      "Advanced salary analytics",
      "Interview preparation tools",
      "Priority support",
    ],
  },
];

const recruiterPlans = [
  {
    _id: "starter",
    name: "Starter",
    icon: Sparkles,
    price: "0",
    popular: false,
    features: [
      "Create company profile",
      "Post 1 active job",
      "Receive candidate applications",
      "Basic candidate search",
      "Manage job listings",
    ],
  },
  {
    _id: "recruiterGrowth",
    name: "Growth",
    icon: Zap,
    price: "29",
    popular: true,
    features: [
      "Everything in Starter",
      "Post up to 10 active jobs",
      "Advanced candidate search",
      "AI-powered candidate matching",
      "Access candidate resumes",
      "Candidate shortlist management",
      "Application analytics",
      "Company verification badge",
    ],
  },
  {
    _id: "enterprise",
    name: "Enterprise",
    icon: Crown,
    price: "79",
    popular: false,
    features: [
      "Everything in Growth",
      "Unlimited active job postings",
      "Unlimited candidate search",
      "Advanced AI hiring assistant",
      "Bulk candidate management",
      "Team member collaboration",
      "Detailed hiring analytics",
      "Featured job listings",
      "Priority support",
      "Dedicated account manager",
    ],
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("seeker");

  return (
    <section className="bg-[#08090d] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-purple-400 uppercase bg-purple-950/40 rounded-full border border-purple-800/50 mb-4">
          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
          Pricing
          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          Pay for the leverage, <br /> not the listings
        </h2>

        {/* Billing Switcher */}
        <div className="inline-flex items-center bg-[#13151f] p-1.5 rounded-full border border-slate-800 mb-14">
          <button
            onClick={() => setBillingCycle("seeker")}
            className={`px-5 py-2 rounded-full text-xs font-medium transition ${
              billingCycle === "seeker"
                ? "bg-white text-black font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Job Seeker
          </button>
          <button
            onClick={() => setBillingCycle("recruter")}
            className={`px-5 py-2 rounded-full text-xs font-medium transition flex items-center gap-2 ${
              billingCycle === "recruter"
                ? "bg-white text-black font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Recruter
            {/* <span className="px-2 py-0.5 text-[10px] font-bold bg-pink-500 text-white rounded-full">25%</span> */}
          </button>
        </div>

        {/* Pricing Cards Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {(billingCycle === "seeker" ? seekerPlans : recruiterPlans).map(
            (plan, idx) => {
              const Icon = plan.icon;

              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between p-6 rounded-2xl text-left transition border ${
                    plan.popular
                      ? "bg-[#141622] border-slate-700 shadow-xl"
                      : "bg-[#10121b]/80 border-slate-800/80"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-[#1c1f2e] text-purple-400">
                          <Icon className="w-4 h-4" />
                        </div>

                        <span className="text-base font-semibold">
                          {plan.name}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-3xl font-bold">
                          ${plan.price}
                        </span>
                        <span className="text-xs text-slate-500"> /month</span>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-slate-400 mb-4">
                      {billingCycle === "seeker"
                        ? "Build your career with the right opportunities:"
                        : "Find and hire the right talent for your company:"}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center text-xs text-slate-300"
                        >
                          <span className="p-0.5 rounded-full bg-slate-800 text-slate-400 mr-2.5">
                            <Check className="w-3 h-3" />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.price === "0" ? (
                    <button
                      type="button"
                      onClick={() => (window.location.href = "/dashboard")}
                      className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-[#1c1f2e] text-white"
                    >
                      Get Started Free
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </button>
                  ) : (
                    <form action="/api/checkout_sessions" method="POST">
                      <input type="hidden" name="plan_id" value={plan._id} />

                      <button
                        type="submit"
                        role="link"
                        className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-between transition ${
                          plan.popular
                            ? "bg-white text-black hover:bg-slate-200"
                            : "bg-[#1c1f2e] text-white hover:bg-[#252a3e]"
                        }`}
                      >
                        <span>Choose This Plan</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
