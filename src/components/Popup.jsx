import axios from "axios";
import React, {  useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { API } from "../API";

function Popup(props) {
  const token = localStorage.getItem("token");
  const [characters, setCharacters] = useState(300)
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
    alert("please fill all the fields")
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
    // if (response) {
    //   window.location = `/productDetails/${props.id}`;
    // }
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
        <h4>  Product Name:{props.productName}</h4>
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
                      ></textarea>
                      <sapn>Remaining Characters {characters}</sapn>
                    </div>
                    </div>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
              <Button type="submit" onClick={(e)=>handleSubmit(e)} >Ask Questions</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Popup;
