import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
function Education() {
  
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
      <div className="App">
          <div className='page'>
                    {/* <div className='nav'>
                        <div className='signin'> <h5 className='signinText'>Sign in</h5></div>
                    </div> */}
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
                    
                        <h5 className='indicate'>* Indicates required</h5>
                        <br></br>
                        <h1 className='edu'>Education</h1>
          </div>

        <form>
        <Container>
            <Row>
                <Col>
                    <label className='labelSchool'>School</label>
                    <input className='school' type="text" required placeholder="Ex: Curtin University" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelDegree'>Degree</label>
                    <input className='degree' type="text" required placeholder="Ex:Bachelor’s" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelField'>Fielf of study</label>
                    <input className='field' type="text" required placeholder="Ex:Computing" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelStart'>Start Date</label>
                    <input className='month' type="number" required placeholder="Month" />
                </Col>
                <Col>
                   
                    <input className='Year' type="number" required placeholder="Year" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelEnd'>End date (or expected)</label>
                    <input className='Endmonth' type="number" required placeholder="Month" />
                </Col>
                <Col>
                   
                    <input className='EndYear' type="number" required placeholder="Year" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelGrade'>Grade</label>
                    <input className='grade' type="number" required placeholder="Grade" />
                </Col>
            </Row>
            <label className='labelActivity'>Activities and societies</label>
            <textarea className='Activity' type="text" required placeholder="Activities and societies" />
        </Container>
        <button type='submit' className='btnEdu' onClick={handleShow}><div className='btnText'>Save</div></button>
        </form>

        {/* <Modal className='modalEdu' show={show} onHide={handleClose}>
        <Modal.Body>
          <button  className='btnAdd' onClick={handleClose}><div className=''>Add</div></button>
          <button  className='btnSkip' onClick={handleClose}><div className=''>Skip</div></button>
        </Modal.Body>                                                                                                                                       */}
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Re-Sent
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Confirm
          </Button>
        </Modal.Footer> */}
      {/* </Modal> */}
      </div>
    );
}
export default Education;