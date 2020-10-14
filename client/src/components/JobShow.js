import React, {useEffect, useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";
<<<<<<< HEAD
=======
import {Link} from "react-router-dom"
>>>>>>> adf595630dcdf2094bd1e8d635cb60ae6802844b

const JobShow = () => {

  const [job, setJob] = useState([]);

  const authContext = useContext(AuthContext)

  const getJob = async () => {
    try {
      let res = await axios.get(`/api/users/${authContext.user.id}/jobs/1`);
      console.log(res.data);
      setJob(res.data);
    } catch (err) {
      console.log(err.response);
      alert("error");
    }
  };

  useEffect(() => {
   getJob();
  }, []);

  return(
    <div>
      <h1>{job.company}</h1>
        <h2>{job.job_title}</h2>
          <h3>{job.salary}</h3>
          <h3>{job.location}</h3>
         <h3>{job.date_applied}</h3>
          <h3>{job.description}</h3>
          <h3>{job.status}</h3>
      <Link to="/jobShowEdit">
        <Button >
            <p>Edit  Info</p>
        </Button>
      </Link>
    </div>

  )
}

export default JobShow;