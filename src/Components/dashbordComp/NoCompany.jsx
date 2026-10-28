
"use client";

import { useState } from "react";
import {
  Building2,
  BriefcaseBusiness,
  X,
  MapPin,
  Upload,
  Image as ImageIcon,
  ChevronDown,
} from "lucide-react";

const NoCompany = () => {
  const [showFaq, setShowFaq] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    industry: "technology",
    website: "",
    location: "",
    employees: "1-10",
    description: "",
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeRegister = () => {
    setShowRegister(false);
    setLogo(null);
    setLogoPreview("");
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      alert("Please select a PNG or JPG image.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Logo must be smaller than 5MB.");
      e.target.value = "";
      return;
    }

    if (logoPreview) URL.revokeObjectURL(logoPreview);

    setLogo(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.location.trim()) {
      alert("Please enter your company name and location.");
      return;
    }

    alert("Form validated! Connect your backend to save the company.");
  };

  return (
    <div className="relative flex min-h-[calc(100vh-132px)] flex-col items-center justify-center px-4 py-10">
      <div className="mb-7 flex flex-col items-center">
        <div className="relative flex h-36 w-36 rotate-[-3deg] items-center justify-center rounded-[24px] border border-[#303030] bg-[#191919] shadow-[0_0_65px_rgba(255,255,255,0.035)]">
          <div className="flex h-28 w-28 flex-col justify-center rounded-xl bg-[#303030] p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-[#454545]" />
              <div className="h-1 w-10 rounded bg-[#454545]" />
            </div>
            <div className="space-y-2">
              <div className="h-1 w-full rounded bg-[#494949]" />
              <div className="h-1 w-4/5 rounded bg-[#494949]" />
              <div className="h-1 w-11/12 rounded bg-[#494949]" />
            </div>
            <BriefcaseBusiness
              size={22}
              className="mt-3 self-end text-[#555555]"
            />
          </div>

          <div className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg">
            <Building2 size={19} />
          </div>
        </div>
      </div>

      <div className="max-w-lg text-center">
        <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
          Company not registered yet
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400">
          Set up your business profile to start posting high-performance job
          listings and manage your talent loop.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setShowRegister(true)}
            className="flex min-h-11 items-center justify-center rounded-md bg-white px-7 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Register your company
          </button>

          <button
            type="button"
            onClick={() => setShowFaq(true)}
            className="min-h-11 rounded-md border border-[#333333] bg-[#1d1d1d] px-8 text-sm text-gray-200 transition hover:bg-[#292929]"
          >
            View FAQ
          </button>
        </div>

        <p className="mt-12 text-xs text-gray-600">
          Need specialized assistance? Contact our enterprise support team.
        </p>
      </div>

      {showFaq && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setShowFaq(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="faq-title"
            className="w-full max-w-md rounded-xl border border-[#333333] bg-[#1b1b1b] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 id="faq-title" className="text-lg font-semibold">
                Company FAQ
              </h3>
              <button
                type="button"
                onClick={() => setShowFaq(false)}
                aria-label="Close FAQ"
                className="rounded-md p-2 text-gray-400 hover:bg-[#292929] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-medium">Why register a company?</p>
                <p className="mt-1 text-gray-400">
                  A company profile helps you publish jobs and manage
                  applications.
                </p>
              </div>
              <div>
                <p className="font-medium">What information do I need?</p>
                <p className="mt-1 text-gray-400">
                  Prepare your company name, logo, website, location and
                  description.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowFaq(false)}
              className="mt-6 w-full rounded-md bg-white py-3 text-sm font-medium text-black hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showRegister && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeRegister}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-title"
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[#333333] bg-[#181818] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#303030] bg-[#181818] px-5 py-4 sm:px-7">
              <div>
                <h3 id="register-title" className="text-lg font-semibold">
                  Register your company
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Create your business profile on HireLoop
                </p>
              </div>

              <button
                type="button"
                onClick={closeRegister}
                aria-label="Close registration"
                className="rounded-md p-2 text-gray-400 transition hover:bg-[#292929] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-5 sm:p-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company-name" className="mb-2 block text-xs font-medium text-gray-300">
                    Company Name *
                  </label>
                  <input
                    id="company-name"
                    name="name"
                    value={formData.name}
                    onChange={updateField}
                    required
                    maxLength={100}
                    placeholder="e.g. Acme Corp"
                    className="w-full rounded-lg border border-[#333333] bg-[#202020] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="mb-2 block text-xs font-medium text-gray-300">
                    Industry / Category *
                  </label>
                  <div className="relative">
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={updateField}
                      className="w-full appearance-none rounded-lg border border-[#333333] bg-[#202020] px-3 py-3 pr-9 text-sm text-white outline-none focus:border-gray-500"
                    >
                      <option value="technology">Technology</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="marketing">Marketing</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company-website" className="mb-2 block text-xs font-medium text-gray-300">
                    Website URL
                  </label>
                  <input
                    id="company-website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={updateField}
                    placeholder="https://www.company.com"
                    className="w-full rounded-lg border border-[#333333] bg-[#202020] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="company-location" className="mb-2 block text-xs font-medium text-gray-300">
                    Location *
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      id="company-location"
                      name="location"
                      value={formData.location}
                      onChange={updateField}
                      required
                      placeholder="City, Country"
                      className="w-full rounded-lg border border-[#333333] bg-[#202020] py-3 pl-9 pr-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="employees" className="mb-2 block text-xs font-medium text-gray-300">
                    Employee Count
                  </label>
                  <div className="relative">
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={updateField}
                      className="w-full appearance-none rounded-lg border border-[#333333] bg-[#202020] px-3 py-3 pr-9 text-sm text-white outline-none focus:border-gray-500"
                    >
                      <option value="1-10">1–10 employees</option>
                      <option value="11-50">11–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201+">201+ employees</option>
                    </select>
                    <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company-logo" className="mb-2 block text-xs font-medium text-gray-300">
                    Company Logo
                  </label>
                  <label
                    htmlFor="company-logo"
                    className="flex min-h-[46px] cursor-pointer items-center gap-3 rounded-lg border border-dashed border-[#414141] bg-[#202020] px-3 py-2 transition hover:border-gray-500"
                  >
                    {logoPreview ? (
                      <img
                        src={logoPreview}
                        alt="Company logo preview"
                        className="h-8 w-8 rounded object-cover"
                      />
                    ) : (
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#303030] text-gray-400">
                        {logo ? <ImageIcon size={16} /> : <Upload size={16} />}
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-medium text-white">
                        {logo ? logo.name : "Upload image"}
                      </span>
                      <span className="block text-[10px] text-gray-500">
                        PNG or JPG · Up to 5MB
                      </span>
                    </span>
                    <input
                      id="company-logo"
                      type="file"
                      accept="image/png,image/jpeg"
                      onChange={handleLogoChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="company-description" className="mb-2 block text-xs font-medium text-gray-300">
                  Brief Description
                </label>
                <textarea
                  id="company-description"
                  name="description"
                  value={formData.description}
                  onChange={updateField}
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell us about your company's mission and culture..."
                  className="w-full resize-y rounded-lg border border-[#333333] bg-[#202020] p-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gray-500"
                />
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-[#303030] pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeRegister}
                  className="rounded-lg border border-[#383838] px-5 py-3 text-sm text-gray-300 transition hover:bg-[#292929] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Register Company
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoCompany;
