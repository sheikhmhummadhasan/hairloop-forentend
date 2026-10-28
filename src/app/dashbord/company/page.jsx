"use client";

import AvablavelCompany from "@/Components/dashbordComp/AvablavleCompany";
import NoCompany from "@/Components/dashbordComp/NoCompany";
import { useEffect, useState } from "react";

const Company = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCompany = async () => {
      try {
        const res = await fetch("/api/company");
        const data = await res.json();

        setCompany(data.company || null);
      } catch (error) {
        setCompany(null);
      } finally {
        setLoading(false);
      }
    };

    getCompany();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {company ? <AvablavelCompany company={company} /> : <NoCompany />}
    </div>
  );
};

export default Company;