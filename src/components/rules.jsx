import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Rules = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="rules-modal">
      <ModalHeader toggle={toggle}>Rules</ModalHeader>
      <ModalBody>
      <p>Objective: Fill the 9x9 grid with numbers so that each column, each row, 
      and each of the nine 3x3 sub-grids contains all of the digits from 1 to 9.</p>

      <p> Ensure each row, column, and 3x3 sub-grid contains the numbers 
       1-9 without repeating any numbers. </p>

      <p> 1. Use your mouse or arrow keys to navigate to an empty cell.</p>
      
      <p> 2. Type the number (1-9) directly into the selected cell using your keyboard.</p>

      <p> 3. Use backspace to delete a number in a cell. </p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default Rules;
