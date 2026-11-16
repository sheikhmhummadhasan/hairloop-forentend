import { toast } from "react-toastify";

// GET ALL ROLE API
export const getRole = async () => {
  const prom = await fetch("http://localhost:5000/role", {
    cache: "no-store",
  });
  const res = await prom.json();
  return res;
};

// GET SINGEL ROLE BY ID API
export const getRoleById = async (id) => {
  const prom = await fetch(`http://localhost:5000/role/${id}`, {
    cache: "no-store",
  });
  const res = await prom.json();
  return res;
};

// GET ROLE BY USERid
export const getRoleByUserID = async (id) => {
  const prom = await fetch(`http://localhost:5000/role_data/${id}`);
  const res = await prom.json();
  return res;
};

// get role by user id and DELETE
export const getRolebyUserIdAndDelete = async (id) => {
  const prom = await fetch(`http://localhost:5000/role_data/${id}`, {
    method: "DELETE",
  });
  const res = await prom.json();
  if (!res) {
    toast.error("pls try agein later");
  } else {
    toast.success("Delete Jobs Successfullt done!");
  }
  return res;
};

// update rolde job post
export const updatejobsClosed = async (id) => {
  const prom = await fetch(`http://localhost:5000/role_data/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application-json",
    },
    body: JSON.stringify({}),
  });
  const res = await prom.json();
  if (!res) {
    toast.error("pls try agein later");
  }
  return res;
};

// get closed jobs api
export const closedJobs = async (id) => {
  const prom = await fetch(`http://localhost:5000/role_veryfy/${id}`);
  const res = await prom.json();
  return res;
};

// get active jobs api
export const activeJobs = async (id) => {
  const prom = await fetch(`http://localhost:5000/role_veryfying/${id}`);
  const res = await prom.json();
  return res;
};

// POST JOBS MECHINGS API
export const postjobs = async (data) => {
  const prom = await fetch(`http://localhost:5000/role`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await prom.json();
  if (res) {
    toast.success("Successfully register your company!");
  } else {
    toast.error("Somthin went to wrong!");
  }
  console.log(res);
  return res;
};

// DELETE JOBS API
export const deleteJos = async (id) => {
  const prom = await fetch(`http://localhost:5000/role/${id}`, {
    method: "delete",
  });
  const res = await prom.json();
  if (res) {
    toast.success("Successfully register your company!");
  } else {
    toast.error("Somthin went to wrong!");
  }
  console.log(res);
  return res;
};

// GET COMPANY DATA API
export const getCompanyById = async (id) => {
  const prom = await fetch(`http://localhost:5000/company/${id}`);
  const res = await prom.json();
  return res;
};
// GET COMPANY DATA  API
export const getCompany = async () => {
  const prom = await fetch(`http://localhost:5000/company`);
  const res = await prom.json();
  return res;
};
// POST COMPANY DATA API
export const postCompanyData = async (data) => {
  const prom = await fetch(`http://localhost:5000/company`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await prom.json();
  if (res) {
    toast.success("Successfully register your company!");
  } else {
    toast.error("Somthin went to wrong!");
  }
  console.log(res);
  return res;
};

// application for a job
export const applicationForJob = async (data) => {
  const prom = await fetch(`http://localhost:5000/applications`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await prom.json();
  if (!res) {
    toast.error("try agin later");
  } else {
    toast.success("Job apply successfullyu done!");
  }
  return res;
};

// application data get
export const getApplicationData = async () => {
  const prom = await fetch(`http://localhost:5000/applications`);
  const res = await prom.json();
  return res;
};

// appliction data get by creadet id
export const getApplicationDataByUserID = async (id) => {
  const prom = await fetch(`http://localhost:5000/applications/${id}`);
  const res = await prom.json();
  return res;
};
// appliction rejection data get by creadet id
export const getApplicationRejectionDataByUserID = async (id) => {
  const prom = await fetch(`http://localhost:5000/applications_rejection/${id}`);
  const res = await prom.json();
  return res;
};
// appliction selected data get by creadet id
export const getApplicationSelectionDataByUserID = async (id) => {
  const prom = await fetch(`http://localhost:5000/applications_selection/${id}`);
  const res = await prom.json();
  return res;
};
