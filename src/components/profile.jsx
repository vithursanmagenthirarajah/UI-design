import React, { useState } from 'react'
import Cover from "../images/cover.png"
import ProfileOut from "../images/Ellipse 52.png"
import profile from "../images/profile.png"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
    
  function Profile() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
                <div className='page'>
                    <div className='nav'>
                        <div className='signin'> <h5 className='signinText'>Sign in</h5></div>
                    </div>
                        <h5 className='indicate'>* Indicates required</h5>
                    <div className='frame'>
                        <img src={Cover} className="cover" />
                        <h1 className='addCover'>ADD COVER PAGE</h1>  
                    </div>
                        <img src={ProfileOut} className="ProfileOut" />
                        <img src={profile} className="profile" />
                        <h1 className='addProfile'>ADD PROFILE IMAGE</h1>  
                </div>

        <div>
        <form>
        <Container>
            <Row>
                <Col>
                    <input className='firstName' type="text" required placeholder="Enter your first name" />
                </Col>
                <Col>
                    <input className='lastName' type="text" required placeholder="Enter your last name" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className='email' type="text" required placeholder="Enter your email" />
                </Col>
                <Col>
                    <input className='phone' type="text" required placeholder="Enter your contact number" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className='location' type="text" required placeholder="Enter your location" />
                </Col>
            </Row>

            <textarea className='textArea' type="text" required placeholder="Tell who you are ...." />
        </Container>
        <button type='submit' className='create' onClick={handleShow}><div className='btntext'>Create</div></button>
        </form>
        </div>
       

        <Modal className='modalOTP' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation</Modal.Body>
            <input className='OTP' type="number" required placeholder="Enter OTP"/>                                                                                                                                       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Re-Sent
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
       
    )
  }
  export default Profile;

