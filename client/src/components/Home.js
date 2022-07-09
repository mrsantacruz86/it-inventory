import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MarketingCard from './MarketingCard';

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <Row>
          <Col md={4} className="px-5">
            <img src="hhch-logo.svg" alt="His House Children's Home Logo" />
          </Col>
          <Col md={8} className="px-3 d-flex align-items-center">
            <div>
              <h1 className="display-3">PQI TOOLS</h1>
              <p>
                Welcome to PQI Tools! This is a collection of electronic form designed to improve
                the eficiency of the inspections our deparmet conducts.
              </p>
              <p>
                We cover many different areas and departments. Please explore the content bellow for
                a complete list of our services.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* Three columns of text below the carousel */}
      <Container>
        <div className="card-deck marketing-card-deck">
          <MarketingCard
            title="House Audits"
            img={<i className="fas fa-home fa-10x" />}
            text="Houses are carefully inspected several tiems each quarter. This tool help us store
                house audits with the findings and scores."
            linkLabel="View Details &raquo;"
            linkPath="/houseaudits"
          />
          <MarketingCard
            title="Vehicle Audits"
            img={<i className="fas fa-car fa-10x" />}
            text="Every quarter all the vehicles used to trasnport children are audited. The Car Audit
            tool help us keep track of this information."
            linkLabel="View Details &raquo;"
            linkPath="/caraudits"
          />
          <MarketingCard
            title="Files Audits"
            img={<i className="fas fa-book fa-10x" />}
            text="The File Audits is a collection of tools designed to record data from these audits: CRR
            (Blue Books), UAC Files, HR Files, Volunteer Files and Licensing Files."
            linkLabel="View Details &raquo;"
            linkPath="/fileaudits"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
