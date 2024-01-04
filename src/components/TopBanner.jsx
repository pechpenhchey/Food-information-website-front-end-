import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../styles/style.css';

const TopBanner = () => {
  return (
    <section id="home">
      <div className="container-fluid top-banner">
        <div className="container">
          <div className="row">
            <div>
            <Container className="">
              <Row className="justify-content-center">
                <div className='row'>
                  <Form className="d-flex justify-content-center align-items-center">
                    <Col lg={5} md={10} sm={12} className=" mb-lg-0">
                      <Form.Control
                        type="search"
                        placeholder="Search foods by title, category"
                        className="me-2 search-input"
                        aria-label="Search"
                      />
                    </Col>
                    <div className="col-lg-1 d-flex">
                    <Button className='main-btn p-1 mx-1'>&nbsp;<i className="fa-solid fa-magnifying-glass"></i>&nbsp;</Button>
                    </div>
                  </Form>
                </div>
              </Row>
            </Container>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
