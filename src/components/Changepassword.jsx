import React,{useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import swal from "sweetalert";
function Changepassword() {
  const history = useHistory();
  const [password, setPassword]=useState({currentpassword:false,Newpassword:false, confirmpassword:false, currentpasswordval:"", newpasswordval:"", confirmpasswordval:"" })
const{currentpassword,Newpassword, confirmpassword, currentpasswordval, newpasswordval, confirmpasswordval}=password
const changeState = (newState) =>
setPassword((prevState) => ({ ...prevState, ...newState }));

const handleChange=(e)=>{
  changeState({
    [e.target.name]: e.target.value,
  });
}

const handleCancel=()=>{
  history.push(`/`);
}
const handleSubmit = async () => {

  if (
    currentpasswordval === "" ||
    newpasswordval === "" ||
    confirmpasswordval === ""    
    ) {
      swal({
        title: "Error",
        text: "Please Fill all fields",
        icon: "error",
        buttons: true,
        dangerMode: true,
      });
      return;
    }
    if(newpasswordval!==confirmpasswordval ){
      swal({
        title: "Error",
        text: "New password and confirm password does not match",
        icon: "error",
        buttons: true,
        dangerMode: true,
      });
      return;
    } 
}


  return (
    <div>
      <Header />
      <Navigation />
      <div class="container my-5">
	<div class="row d-flex align-items-center justify-content-center">
		<div class="col-sm-5">
		    
		    <label>Current Password</label>
		    <div class="form-group pass_show"> 
                <input type={currentpassword? "text" :"password"} value={currentpasswordval} name="currentpasswordval"  onChange={handleChange} class="form-control" placeholder="Current Password" required/> 

                {currentpassword? <RemoveRedEyeIcon className="passwicon" onClick={()=>changeState({currentpassword:!currentpassword})} /> :<VisibilityOffIcon className="passwicon" onClick={()=>changeState({currentpassword:!currentpassword})} />}
                
            </div> 
		       <label>New Password</label>
            <div class="form-group pass_show"> 
                <input type={Newpassword? "text" :"password"} name="newpasswordval"  onChange={handleChange}  value={newpasswordval} class="form-control" placeholder="New Password" required/> 
                {Newpassword? <RemoveRedEyeIcon className="passwicon" onClick={()=>changeState({Newpassword:!Newpassword})} /> :<VisibilityOffIcon className="passwicon" onClick={()=>changeState({Newpassword:!Newpassword})} />}
            </div> 
		       <label>Confirm Password</label>
            <div class="form-group pass_show"> 
                <input type={confirmpassword? "text" :"password"} name="confirmpasswordval"  onChange={handleChange}  value={confirmpasswordval} class="form-control" placeholder="Confirm Password" required/> 
                {confirmpassword? <RemoveRedEyeIcon className="passwicon" onClick={()=>changeState({confirmpassword:!confirmpassword})} /> :<VisibilityOffIcon className="passwicon" onClick={()=>changeState({confirmpassword:!confirmpassword})} />}
            </div> 
            
               <button className="btn" style={{backgroundColor:"#81BF33", marginRight:"10px", color:"white"}} onClick={handleSubmit} >Submit</button>
              <button className="btn"  style={{backgroundColor:"#81BF33", color:"white"}} onClick={handleCancel} >Cancel</button>
            
            
		</div>  
	</div>
</div>


      <Footer />
    </div>
  );
}

export default Changepassword;
