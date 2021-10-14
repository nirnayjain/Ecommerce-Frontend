import axios from "axios";
import React, {  useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { API } from "../API";
import swal from "sweetalert";

function Popup(props) {
  const token = localStorage.getItem("token");
  const [characters, setCharacters] = useState(300)
  const history = useHistory();
  const[userquestion, setUserQuestion]=useState({
    name:"",
    contact:"",
    question:""

  })

const {name, contact, question,product} = userquestion

const getUserQuestion = (event) => {
  const { name, value } = event.target;

  setUserQuestion((preval) => {
    return { ...preval, [name]: value };
  });
};

async function handleSubmit(event){
  event.preventDefault();
  if(!(
    name||
    contact||
    question
  )){
    // alert("please fill all the fields")
    swal("Oops!", "Please fill all the required fields", "error");
    return
  }else{
    let response = await axios.post(`${API}/api/question/add_Question`,
    { name,
     contact,
     question,
      product:props.id
     }
    ,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
    if (response.data.message=== "success") {
      swal({
        title: "Send Successsfully!",
        text: "Thanks for Asking a question",
        icon: "success",
        button: "Done",
        type: "success",
      }).then(() => {
        window.location = `/productDetails/${props.id}`;
      });
    }else{
      swal("Oops!", "Something went wrong!", "error");
    }

  }
}


useEffect(()=>
 titleCharacter()
 ,[question])

 const titleCharacter=()=>{
     setCharacters(300-question.length)
 }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      {props.modelfor === "address" ? (
          <>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
             DELIVERY & RETURN
          </Modal.Title>
        </Modal.Header>

            <Modal.Body>
              <p>
                {props.delievery}
                </p>
              {/* <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3"
                type="text"
                placeholder="Enter Your Name"
              />
              <div className="row">
                <div className="col-6">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-3"
                    type="text"
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="col-6">
                  <input
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="mt-3"
                    type="text"
                    placeholder="Enter Pin Code"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <CountryDropdown
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </div>
                <div className="col-6">
                  <RegionDropdown
                    country={country}
                    value={state}
                    onChange={(val) => setState(val)}
                  />
                </div>
              </div>
              <input
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="mt-3"
                type="text"
                placeholder="Enter Phone Number"
              /> */}
            </Modal.Body>
            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </>
        ) : (
          <>

          <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
             Ask a Question
          </Modal.Title>
        </Modal.Header>
        <div className="mx-3">
        <h4>  Product: {props.productName}</h4>
        </div>

            <Modal.Body>
              {/* <div className="row">
                <div className="col-6">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-3"
                    type="text"
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="col-6">
                  <input
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="mt-3"
                    type="text"
                    placeholder="Enter Pin Code"
                  />
                </div>
              </div> */}



              <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={getUserQuestion}
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="contact"
                        value={contact}
                        onChange={getUserQuestion}
                        placeholder="Email or Phone"
                        required=""
                      />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea
                        name="question"
                        value={question}
                        onChange={getUserQuestion}
                        placeholder="Write Your Question"
                        maxlength="300"
                      ></textarea>
                      <sapn>Remaining Characters {characters}</sapn>
                    </div>
                    </div>

            </Modal.Body>
            <Modal.Footer>
              <Button style={{color:"white" ,backgroundColor:"#81BF33", outline:"none", border:"none"}} onClick={props.onHide}>Close</Button>
              <Button style={{color:"white" ,backgroundColor:"#81BF33", outline:"none", border:"none"}} type="submit" onClick={(e)=>handleSubmit(e)} >Send Question</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Popup;
