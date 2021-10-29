import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


export default function Planilla(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Agregar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
          <Form>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre Completo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" placeholder="Edad" />
            </Form.Group>
          </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
