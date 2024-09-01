import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Table from './table';

const EndPopup = ({ isOpen, toggle, data }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Time's Up!</ModalHeader>
      <ModalBody>
        Out of 648 participants, your performance places you in the bottom 10% of players.<br /><br />
        These are your game stats compared to the average player:
        <Table data={data} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EndPopup;
