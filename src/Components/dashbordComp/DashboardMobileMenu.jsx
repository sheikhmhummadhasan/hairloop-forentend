"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SidebarContent } from "@/Components/dashbordComp/SidebarContent";

const DashboardMobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        onClick={() => setMenuOpen(true)}
        className="rounded p-2 text-gray-400 hover:bg-[#292929] hover:text-white md:hidden"
      >
        <Menu size={20} />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/70"
          />

          <aside className="absolute inset-y-0 left-0 flex w-[250px] max-w-[85vw] flex-col overflow-y-auto border-r border-[#303030] bg-[#141414]">
            <div className="flex justify-end p-3">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="rounded p-2 text-gray-400 hover:bg-[#292929] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
};

export default DashboardMobileMenu;