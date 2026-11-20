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
  const prom = await fetch(
    `http://localhost:5000/applications_get_by_appliID/${id}`,
  );
  const res = await prom.json();
  return res;
};
// appliction rejection data get by creadet id
export const getApplicationRejectionDataByUserID = async (id) => {
  const prom = await fetch(
    `http://localhost:5000/applications_rejection/${id}`,
  );
  const res = await prom.json();
  return res;
};

// appliction got with mycompany id
export const getApplicationMyCompany = async (id) => {
  const prom = await fetch(`http://localhost:5000/applications_jobid/${id}`);
  const res = await prom.json();
  return res;
};

// update status of haired and rejection
export const updateApplicationStatus = async (id, status) => {
  console.log(id, status);
  const prom = await fetch(`http://localhost:5000/application_status/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  const res = await prom.json();
  console.log(res);
  return await res;
};

// rejection data for seeker
export const getRejection = async (id) => {
  const prom = await fetch(`http://localhost:5000/application_rejected/${id}`);
  const res = await prom.json();
  return res;
};
// offer data for seeker
export const getOfferd = async (id) => {
  const prom = await fetch(`http://localhost:5000/application_offerd/${id}`);
  const res = await prom.json();
  return res;
};
// get application pending data;
export const getapplicationPendingData = async (id) => {
  const prom = await fetch(`http://localhost:5000/applications_pending/${id}`);
  const res = await prom.json();
  return res;
};

// get saved jobs
export const getSavedJobs = async (id) => {
  const prom = await fetch(`http://localhost:5000/getsavedjobs/${id}`);
  const res = await prom.json();
  return res;
};

// opration save jobs false to true
export const savedJobsOpration = async(data)=>{
   const prom = await fetch(`http://localhost:5000/getsavedjobs`,{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(data)
   });
  const res = await prom.json();
  if(!res){
    toast.error('somthings went to wrong!')
  }else{
    toast.success('Saved This jobs Successfully')
  }
  return res;
}

// delete saved
export const deleteSave = async(id) => {
  const prom = await fetch(`http://localhost:5000/getsavedjobs/${id}`,{
    method:"DELETE"
  })
  const res = await prom.json();
  if(!res){
    toast.error('somthings went to wrong!')
  }else{
    toast.success('Saved This jobs Delete Successfully')
  }
  return res
}


// post paymet hsitory
export const paymentHistory = async (data) => {
  const prom = await fetch("http://localhost:5000/paymentHistory", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!prom.ok) {
    const errorText = await prom.text();
    console.log("API Error:", prom.status, errorText);
    return null;
  }

  const res = await prom.json();
  return res;
};

// get payment history by 
export const getHistyoyById = async(id) =>{
  const prom = await fetch(`http://localhost:5000/paymentHistory/${id}`);
    if (!prom.ok) {
    const errorText = await prom.text();
    console.log("API Error:", prom.status, errorText);
    return null;
  }
  const res = await prom.json();
  return res;
}