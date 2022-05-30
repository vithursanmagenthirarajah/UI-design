import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
function Publish() {
  
  const [show, setShow] = useState(false);

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
                        <h1 className='publish'>TIME HIRE THE BEST </h1>
          </div>

        <form>
        <Container>
            <Row>
                <Col>
                    <label className='labelName'>Employer account name</label>
                    <input className='name' type="text" required />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelCompany'>Company name</label>
                    <input className='company' type="text" required  />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelCalling'>Position calling for</label>
                    <input className='calling' type="text" required  />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelOpen'>Application open date</label>
                    <input className='open' type="date" required  />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='labelClose'>Application closing date</label>
                    <input className='close' type="date" required placeholder="Month" />
                </Col>
            </Row>
           
        </Container>
        <button  className='addAppli'><div className='btnText'>Add Application</div></button>
        <button type='submit' className='publishBt'><div className='btnText'>Publish</div></button>
        </form>

        
      </div>
    );
}
export default Publish;