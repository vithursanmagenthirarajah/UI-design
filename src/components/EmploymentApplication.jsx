import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Application from '../images/Appli.png'
function EmploymentApplication() {
  
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
      <div className="App">
          <div className='page'>
                   
                     <Navbar bg="dark" variant="dark" className='navigation'>
                        <Container>
                        <Navbar.Brand href="/">Profile</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/education">Education</Nav.Link>
                        <Nav.Link href="/experience">Experience</Nav.Link>
                        <Nav.Link href="/publish">Job Post</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                    
                    <img src={Application} className='image'/>
          </div>

        <form>
        <Container>
            <Row>
                <Col>
                    <label className='empname'>Name</label>
                </Col>
                <Col>
                    <input className='fname' type="text" required placeholder="first name" />
                </Col>
                <Col>
                    <input className='lname' type="text" required placeholder="last name" />
                </Col>
            </Row>
    
            <Row>
                <Col>
                    <label className='bdate'>Birth Date</label>
                </Col>
                <Col>
                    <input className='ddate' type="number" required placeholder="date" />
                </Col>
                <Col>
                    <input className='dmonth' type="number" required placeholder="Month" />
                </Col>
                <Col>
                    <input className='dyear' type="number" required placeholder="Year" />
                </Col>
            </Row>
           
            <Row>
                <Col>
                    <label className='phoneno'>Phone number</label>
                <Col>
                </Col>
                    <input className='phonebox' type="number" required placeholder="Phone" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <label className='emaillabel'>Email</label>
                </Col>
                <Col>
                    <input className='eemail' type="text" required placeholder="Email" />
                </Col>
            </Row>


            <Row>
                <Col>
                    <label className='addressLabel'>Address</label>
                </Col>
                <Col>
                    <input className='address1' type="text" required placeholder="line 1" />
                </Col>
                <Col>
                    <input className='address2' type="text" required placeholder="line 2" />
                </Col>
            </Row>


            <label className='job'>Jobs and skills</label>
            <textarea className='jobBox' type="text" required  />
        </Container>
        <button type='submit' className='save' ><div className='savetext'>Save</div></button>
        </form>

      
      </div>
    );
}
export default EmploymentApplication;