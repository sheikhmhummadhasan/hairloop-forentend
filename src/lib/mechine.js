
import { toast } from "react-toastify";
import { getUserToken } from "./token";

// get token
export const authHeader = async () => {
  const token = await getUserToken();
  const header = token
    ? {
        authorization: `Bearer ${token}`,
      }
    : {};

  return header;
};

// GET ALL ROLE API
export const getRole = async () => {
  const prom = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URI}/role`, {
    cache: "no-store",
  });
  const res = await prom.json();
  return res;
};

// GET SINGEL ROLE BY ID API
export const getRoleById = async (id) => {
  const prom = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URI}/role/${id}`, {
    cache: "no-store",
    headers: {
      ...(await authHeader()),
    },
  });
  const res = await prom.json();
  return res;
};

// GET ROLE BY USERid
export const getRoleByUserID = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/role_data/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};

// get role by user id and DELETE
export const getRolebyUserIdAndDelete = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/role_data/${id}`,
    {
      method: "DELETE",
      headers: {
        ...(await authHeader()),
      },
    },
  );
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
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/role_data/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application-json",
        ...(await authHeader()),
      },
      body: JSON.stringify({}),
    },
  );
  const res = await prom.json();
  if (!res) {
    toast.error("pls try agein later");
  }
  return res;
};

// get closed jobs api
export const closedJobs = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/role_veryfy/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};

// get active jobs api
export const activeJobs = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/role_veryfying/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};

// POST JOBS MECHINGS API
export const postjobs = async (data) => {
  const prom = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URI}/role`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(data),
  });
  const res = await prom.json();
  if (res) {
    toast.success("Successfully register your company!");
  } else {
    toast.error("Somthin went to wrong!");
  }
  return res;
};

// DELETE JOBS API
export const deleteJos = async (id) => {
  const prom = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URI}/role/${id}`, {
    method: "delete",
    headers: {
      ...(await authHeader()),
    },
  });
  const res = await prom.json();
  if (res) {
    toast.success("Successfully register your company!");
  } else {
    toast.error("Somthin went to wrong!");
  }
  return res;
};

// GET COMPANY DATA API
export const getCompanyById = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/company/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};
// GET COMPANY DATA  API
export const getCompany = async () => {
  const prom = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URI}/company`, {
    headers: {
      ...(await authHeader()),
    },
  });
  const res = await prom.json();
  return res;
};
// POST COMPANY DATA API
export const postCompanyData = async (data) => {
  const prom = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URI}/company`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(data),
  });
  const res = await prom.json();
  if (res) {
    toast.success("Successfully register your company!");
  } else {
    toast.error("Somthin went to wrong!");
  }
  return res;
};

// application for a job
export const applicationForJob = async (data) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/applications`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(await authHeader()),
      },
      body: JSON.stringify(data),
    },
  );
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
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/applications`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};

// appliction data get by creadet id
export const getApplicationDataByUserID = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/applications_get_by_appliID/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};
// appliction rejection data get by creadet id
export const getApplicationRejectionDataByUserID = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/applications_rejection/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};

// appliction got with mycompany id
export const getApplicationMyCompany = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/applications_jobid/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};

// update status of haired and rejection
export const updateApplicationStatus = async (id, status) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/application_status/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(await authHeader()),
      },
      body: JSON.stringify({ status }),
    },
  );
  const res = await prom.json();
  return await res;
};

// rejection data for seeker
export const getRejection = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/application_rejected/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};
// offer data for seeker
export const getOfferd = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/application_offerd/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};
// get application pending data;
export const getapplicationPendingData = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/applications_pending/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};

// get saved jobs
export const getSavedJobs = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/getsavedjobs/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  const res = await prom.json();
  return res;
};

// opration save jobs false to true
export const savedJobsOpration = async (data) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/getsavedjobs`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(await authHeader()),
      },
      body: JSON.stringify(data),
    },
  );
  const res = await prom.json();
  if (!res) {
    toast.error("somthings went to wrong!");
  } else {
    toast.success("Saved This jobs Successfully");
  }
  return res;
};

// delete saved jobs
export const deleteSave = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/getsavedjobs/${id}`,
    {
      method: "DELETE",
      headers:{
        ...(await authHeader()),
      }
    },
  );
  const res = await prom.json();
  if (!res) {
    toast.error("somthings went to wrong!");
  } else {
    toast.success("Saved This jobs Delete Successfully");
  }
  return res;
};

// post paymet hsitory
export const paymentHistory = async (data) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/paymentHistory`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(await authHeader()),
      },
      body: JSON.stringify(data),
    },
  );

  if (!prom.ok) {
    const errorText = await prom.text();
    return null;
  }

  const res = await prom.json();
  return res;
};

// get payment history by
export const getHistyoyById = async (id) => {
  const prom = await fetch(
    `${process.env.NEXT_PUBLIC_SURVER_URI}/paymentHistory/${id}`,
    {
      headers: {
        ...(await authHeader()),
      },
    },
  );
  if (!prom.ok) {
    const errorText = await prom.text();
    return null;
  }
  const res = await prom.json();
  return res;
};
