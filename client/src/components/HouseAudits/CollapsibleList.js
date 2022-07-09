import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Row, Col, Card } from 'react-bootstrap';
import moment from 'moment';

import { houseAuditItems } from './houseAudits.json';
import ChevronIconAnimated from '../ChevronIconAnimated';

const CollapsibleList = ({ data }) => {
  const [expanded, setExpanded] = useState(null);
  const onAccordionToggle = id => {
    if (!expanded) {
      setExpanded(id);
    } else if (expanded !== id) {
      setExpanded(id);
    } else {
      setExpanded(null);
    }
  };

  return (
    <Accordion>
      {data.map(audit => (
        <Card key={audit._id}>
          <Accordion.Toggle
            onClick={() => onAccordionToggle(audit._id)}
            as={Card.Header}
            eventKey={audit._id}
          >
            <Row>
              <Col>
                <ChevronIconAnimated open={expanded === audit._id ? true : false} />
              </Col>
              <Col>{moment(audit.date).format('MM/DD/YYYY')}</Col>
              <Col>{audit.house}</Col>
              <Col>{audit.department}</Col>
              <Col>{audit.auditor}</Col>
              <Col>{audit.score}%</Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={audit._id}>
            <Card.Body>
              <div className="border-bottom">
                <strong>Id: </strong>
                {audit._id}
              </div>

              <Row className="border-bottom py-3">
                <Col md={9}>
                  <Row>
                    {houseAuditItems.map((item, index) =>
                      !audit.items[item.name] ? (
                        ''
                      ) : (
                        <Col xs={12} sm={6} lg={4} key={index}>
                          <strong>{item.label}: </strong>
                          <span className="text-danger">{audit.items[item.name].score}%</span>
                        </Col>
                      )
                    )}
                  </Row>
                </Col>
                <Col>
                  <div className="btn-group-vertical">
                    <Link
                      className="btn btn-sm btn-outline-secondary mb-1"
                      to={`/houseaudits/show/${audit._id}`}
                    >
                      <i className="fas fa-file-invoice mr-2" />
                      Details
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-secondary mb-1"
                      to={`/houseaudits/edit/${audit._id}`}
                    >
                      <i className="fas fa-pencil-alt mr-2" />
                      Edit
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-danger mb-1"
                      to={`/houseaudits/delete/${audit._id}`}
                    >
                      <i className="fas fa-trash-alt mr-2" />
                      Delete
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default CollapsibleList;
