import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Modul({cantidad}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Agregar al carrito
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Usted a elegido {cantidad} ¿Desea confirmar? </Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Confirmar compra
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Modul;