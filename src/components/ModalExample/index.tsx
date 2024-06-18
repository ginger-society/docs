import React, { useState } from "react";
import {
  Modal,
  ModalSize,
  ModalHeader,
  ModalBody,
  Button,
} from "@ginger-society/ginger-ui";

const ExampleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal} label="Open sample dialog" />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        size={ModalSize.Large}
        showFooter
      >
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          <p>
            A Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
            sint eius voluptas itaque obcaecati, totam ratione earum ullam
            eligendi officiis ipsum possimus sit quas accusantium voluptatibus
            natus voluptatum aperiam?
          </p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ExampleModal;
