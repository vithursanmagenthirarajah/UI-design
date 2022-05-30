import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
function Experience() {
  
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
      <div className="App">
          <div className='page'>
                    <div className='nav'>
                        <div className='signin'> <h5 className='signinText'>Sign in</h5></div>
                    </div>
                        <h5 className='indicate'>* Indicates required</h5>
                        <br></br>
                        <h1 className='edu'>Experience </h1>
                        <br></br>  <br></br>
          </div>

        <form>
        <Container>
            
            <Row>
                <Col>
                <br></br> <br></br>
                    <label className='labelsCompany'>Company</label>
                    <input className='company' type="number" required placeholder="Company" />
                </Col>
            </Row>
            <label className='labelRole'>Descripe Your role</label>
            <textarea className='role' type="text" required placeholder="" />
        </Container>
        <button type='submit' className='btnEdu' onClick={handleShow}><div className='btnText'>Save</div></button>
        </form>

        <Modal className='modalEdu' show={show} onHide={handleClose}>
        <Modal.Body>
          <button  className='btnAdd' onClick={handleClose}><div className=''>Add</div></button>
          <button  className='btnSkip' onClick={handleClose}><div className=''>Skip</div></button>
        </Modal.Body>                                                                                                                                      
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Re-Sent
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Confirm
          </Button>
        </Modal.Footer> */}
      </Modal>
      </div>
    );
}
export default Experience;