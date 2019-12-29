import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  Form,
  AddButton,
  Card,
  CardTitle,
  RemoveButton,
  CardDescription,
  CardTags,
} from './styles';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 550,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Main() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  function handleOpenModal(event) {
    event.preventDefault();

    setOpen(true);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  return (
    <>
      <Container>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>

        <Form>
          <div>
            <input type="text" placeholder="Search" />
            <label htmlFor="tags">
              <input type="checkbox" id="tags" />
              search in tags only
            </label>
          </div>
          <AddButton onClick={event => handleOpenModal(event)}>
            <FaPlus color="#fff" size={14} /> Add
          </AddButton>
        </Form>

        <Card>
          <div>
            <CardTitle href="http://localhost:3000">Javascript</CardTitle>
            <RemoveButton>
              <FaPlus color="#F95E5A" size={14} /> remove
            </RemoveButton>
          </div>
          <CardDescription>
            JavaScript é uma linguagem de programação que permite implementar
            funcionalidades mais complexas em páginas web.
          </CardDescription>
          <CardTags>#teste1</CardTags>
          <CardTags>#teste2</CardTags>
          <CardTags>#teste3</CardTags>
          <CardTags>#teste4</CardTags>
        </Card>
      </Container>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleCloseModal}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="modal-title">
            <FaPlus color="#000" size={16} /> Add new tool
          </h2>
        </div>
      </Modal>
    </>
  );
}

export default Main;
