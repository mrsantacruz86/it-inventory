import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';

const PromtModal = props => {
  return ReactDOM.createPortal(
    <Modal show {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">{props.content}</Modal.Body>
      <Modal.Footer className="modal-footer">{props.actions}</Modal.Footer>
    </Modal>,
    document.querySelector('#modal')
  );
};

PromtModal.propTypes = {
  title: PropTypes.string.isRequired,
  onHide: PropTypes.func,
  content: PropTypes.element,
  actions: PropTypes.element.isRequired
};

export default PromtModal;
