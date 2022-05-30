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
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
    
  function Profile() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
                <div className='page'>
                   
                    <Navbar bg="dark" variant="dark" className='navigation'>
                        <Container>
                        <Navbar.Brand href="/">Profile</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/education">Education</Nav.Link>
                        <Nav.Link href="/experience">Experience</Nav.Link>
                        <Nav.Link href="/publish">Job Post</Nav.Link>
                        <Nav.Link href="/application">Employment Application</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>


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

