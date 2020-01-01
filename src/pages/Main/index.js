import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Input from '../../components/Input';
import TagsInput from '../../components/TagsInput';
import { Creators as AddToolActions } from '../../store/ducks/addTool';
import { Creators as ToolActions } from '../../store/ducks/tool';
import {
  Container,
  Form,
  AddButton,
  Card,
  CardTitle,
  RemoveButton,
  CardDescription,
  CardTags,
  ModalTitle,
  SubmitButton,
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
  const [searchTag /* setSearchTag */] = useState('');

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();

  // const loading = useSelector(state => state.tool.loading);
  const tools = useSelector(state => state.tool.data);

  function handleOpenModal(event) {
    event.preventDefault();

    setOpen(true);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(AddToolActions.addToolRequest(title, link, description, tags));

    setOpen(false);
  }

  useEffect(() => {
    dispatch(ToolActions.toolRequest(searchTag));
  }, [dispatch, searchTag]);

  return (
    <>
      <Container>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>

        <Form>
          <div>
            <input type="text" placeholder="Search" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="tags">
              <input id="tags" type="checkbox" />
              search in tags only
            </label>
          </div>
          <AddButton onClick={event => handleOpenModal(event)}>
            <FaPlus color="#fff" size={14} /> Add
          </AddButton>
        </Form>

        {tools && tools.length > 0 ? (
          tools.map(tool => (
            <Card key={tool.id}>
              <div>
                <CardTitle href={tool.link} target="_blank">
                  {tool.title}
                </CardTitle>
                <RemoveButton>
                  <FaPlus color="#F95E5A" size={14} /> remove
                </RemoveButton>
              </div>
              <CardDescription>{tool.description}</CardDescription>
              {tool.tags &&
                tool.tags.length > 0 &&
                tool.tags.map(tag => (
                  <CardTags key={tag.id}>#{tag.name}</CardTags>
                ))}
            </Card>
          ))
        ) : (
          <Card>
            <div>
              <CardTitle href="#">Nenhuma ferramenta cadastrada</CardTitle>
            </div>
            <CardDescription>Cadastre sua primeira ferramenta</CardDescription>
          </Card>
        )}
      </Container>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={handleCloseModal}
      >
        <div style={modalStyle} className={classes.paper}>
          <ModalTitle id="modal-title">
            <FaPlus color="#000" size={16} /> Add new tool
          </ModalTitle>

          <form onSubmit={event => handleSubmit(event)}>
            <Input label="Tool name" value={value => setTitle(value)} />
            <Input label="Tool link" value={value => setLink(value)} />
            <Input
              textArea
              label="Tool description"
              value={value => setDescription(value)}
            />
            <TagsInput label="Tags" value={value => setTags(value)} />
            <SubmitButton>Add tool</SubmitButton>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Main;
