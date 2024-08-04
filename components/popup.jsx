import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

// Pop up at the end of the game
const EndPopup = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Time's Up!</ModalHeader>
      <ModalBody>
        Out of 648 participants, based on your performance, you are in the bottom 10% of players. 
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EndPopup;
