import React from "react";
import Confetti from "react-confetti";
import axios from 'axios'
import {API} from '../API'
import { useHistory, useParams, useLocation } from "react-router-dom";
function Paymentsuccess() {
   const { id } = useParams();
   const history = useHistory();
   const token = localStorage.getItem("token");
  const[orderDetails,setOrderDetails]=React.useState(null)
  React.useEffect(()=>{
   getOrder()
  },[])
  const getOrder=async()=>{
    const res= await axios.get(`${API}/api/user/getOrderInfo/${id}`,

       {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

    )
    if(res.data.order===null)
    history.push("/")
    else
    setOrderDetails(res.data.order)
  }
  return (
    <div>
      {orderDetails===null?
      "":
      <>
      <Confetti style={{ width: "100%" }} />
      <div style={{ display: "grid", placeItems: "center", marginTop: "20%" }}>
        <h1>Payment Successfull</h1>
        <a href="/">
          <button>Shop More</button>
        </a>
      </div>
      </>
}
    </div>
  );
}

export default Paymentsuccess;
