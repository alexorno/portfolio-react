import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'
export const Contact = () => {
  const formInitialDetails = {
    name:'',
    email:'',
    phone:'',
    message:'',
  }

  const [formDetails, setFormDetails] = useState({formInitialDetails});
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) =>{
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending, please, wait')
    let response = await fetch("http://localhost:5000", {
      method:'POST',
      header: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
  })
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if(result.code===200) {
      setStatus({ success:true, message: 'Message has send succesfully'})
    } else{
      setStatus({ success:false, message: 'Something went wrong, please, try again later or contact via different method'})
    }

  }

  return(
    <section className='contact' id="contact">

      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Row> 
                <input type='text' value={formDetails.name} placeholder='Your name' onChange={(e) => onFormUpdate('Name', e.target.value)} />
                </Row>
                <Row> 
                <input type='email' value={formDetails.email} placeholder='Your email' onChange={(e) => onFormUpdate('Email', e.target.value)} />
                </Row>
                <Row> 
                <input type='tel' value={formDetails.phone} placeholder='Phone no.' onChange={(e) => onFormUpdate('Phone Number', e.target.value)} />
                </Row>
                <Row> 
                <placeholder row='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('Message', e.target.value)} />
                <button type='submit'><span>{buttonText}</span></button>
                </Row>
                {
                  status.message &
                  <Row>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Row>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

    </section>
  )
}