
"use client";

import { useState } from "react";
import { X, Upload, MapPin, Image as ImageIcon } from "lucide-react";

const AvablavelCompany = ({ onClose = () => {} }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "Technology",
    website: "",
    location: "",
    employeeCount: "1-10 employees",
    description: "",
  });

  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      alert("Only PNG and JPG images are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be under 5MB.");
      e.target.value = "";
      return;
    }

    if (logoPreview) URL.revokeObjectURL(logoPreview);

    setLogo(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Company Data:", {
      ...formData,
      logo,
    });

    alert("Form validated successfully. Backend connection is required to save data.");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-company-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-800 bg-[#121212] p-6 text-neutral-200 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-neutral-800 pb-6">
          <div>
            <h2
              id="register-company-title"
              className="text-xl font-semibold tracking-tight text-white"
            >
              Register New Company
            </h2>
            <p className="mt-1 text-sm text-neutral-400">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 pt-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="companyName" className="mb-1.5 block text-xs font-medium text-neutral-300">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Acme Corp"
                required
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-neutral-600"
              />
            </div>

            <div>
              <label htmlFor="industry" className="mb-1.5 block text-xs font-medium text-neutral-300">
                Industry / Category
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white outline-none focus:border-neutral-600"
              >
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="website" className="mb-1.5 block text-xs font-medium text-neutral-300">
                Website URL
              </label>
              <input
                id="website"
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://www.company.com"
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white outline-none focus:border-neutral-600"
              />
            </div>

            <div>
              <label htmlFor="location" className="mb-1.5 block text-xs font-medium text-neutral-300">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  required
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 py-2.5 pl-10 pr-3.5 text-sm text-white outline-none focus:border-neutral-600"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="employeeCount" className="mb-1.5 block text-xs font-medium text-neutral-300">
                Employee Count Range
              </label>
              <select
                id="employeeCount"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                className="w-full cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-sm text-white outline-none focus:border-neutral-600"
              >
                <option value="1-10 employees">1-10 employees</option>
                <option value="11-50 employees">11-50 employees</option>
                <option value="51-200 employees">51-200 employees</option>
                <option value="201+ employees">201+ employees</option>
              </select>
            </div>

            <div>
              <label htmlFor="companyLogo" className="mb-1.5 block text-xs font-medium text-neutral-300">
                Company Logo
              </label>
              <label
                htmlFor="companyLogo"
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-neutral-700 bg-neutral-900 p-2.5 transition hover:border-neutral-500"
              >
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Logo preview"
                    className="h-9 w-9 rounded-lg object-cover"
                  />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400">
                    {logo ? <ImageIcon size={17} /> : <Upload size={17} />}
                  </span>
                )}

                <span className="min-w-0">
                  <span className="block truncate text-xs font-medium text-white">
                    {logo ? logo.name : "Upload image"}
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    PNG, JPG up to 5MB
                  </span>
                </span>

                <input
                  id="companyLogo"
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleLogoChange}
                  className="sr-only"
                />
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="mb-1.5 block text-xs font-medium text-neutral-300">
              Brief Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your company's mission and culture..."
              className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 p-3.5 text-sm text-white outline-none focus:border-neutral-600"
            />
          </div>

          <div className="flex flex-col-reverse items-stretch justify-end gap-3 border-t border-neutral-800 pt-5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 shadow-md transition hover:bg-neutral-200"
            >
              Register Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AvablavelCompany;
