import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Input from '../../components/Input';
import TagsInput from '../../components/TagsInput';
import { Creators as AddToolActions } from '../../store/ducks/addTool';
import { Creators as RemoveToolActions } from '../../store/ducks/removeTool';
import { Creators as ToolActions } from '../../store/ducks/tool';
import {
  Container,
  Form,
  AddButton,
  RemoveButton,
  Card,
  CardTitle,
  CardDescription,
  CardHighlighter,
  ModalTitle,
  ModalTagError,
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
  const [checked, setChecked] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [tagsError, setTagsError] = useState(false);

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

  function handleRemoveTool(id) {
    const toastrConfirmOptions = {
      onOk: () => dispatch(RemoveToolActions.removeToolRequest(id)),
      onCancel: () => {},
    };
    toastr.confirm(
      'Are you sure you want to remove the tool?',
      toastrConfirmOptions
    );
  }

  function handleChange(event) {
    event.preventDefault();

    setSearchTerm(event.target.value);

    dispatch(ToolActions.toolRequest(checked, event.target.value));
  }

  function handleCheck(event) {
    event.preventDefault();

    setChecked(!checked);

    dispatch(ToolActions.toolRequest(event.target.value, searchTerm));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (tags.length <= 0) {
      setTagsError(true);
    } else {
      dispatch(AddToolActions.addToolRequest(title, link, description, tags));

      setOpen(false);
      setTagsError(true);
    }
  }

  useEffect(() => {
    if (tags.length > 0) {
      setTagsError(false);
    }
  }, [tags.length]);

  useEffect(() => {
    dispatch(ToolActions.toolRequest(checked, searchTerm));
  }, [checked, dispatch, searchTerm]);

  return (
    <>
      <Container>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>

        <Form>
          <div>
            <input
              type="text"
              placeholder="Search"
              onChange={event => handleChange(event)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="tags">
              <input
                type="checkbox"
                id="tags"
                name="tags"
                checked={checked}
                onClick={event => handleCheck(event)}
              />
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
                <a href={tool.link} target="_blank" rel="noopener noreferrer">
                  <CardHighlighter
                    activeIndex={-1}
                    caseSensitive={false}
                    searchWords={[searchTerm]}
                    textToHighlight={tool.title}
                    display="block"
                    color="#fff"
                    font_size="25px"
                    text_decoration="underline"
                  />
                </a>
                {/* <CardTitle href={tool.link} target="_blank">
                  {tool.title}
                </CardTitle> */}
                <RemoveButton onClick={() => handleRemoveTool(tool.id)}>
                  <FaPlus color="#F95E5A" size={14} /> remove
                </RemoveButton>
              </div>
              <CardHighlighter
                activeIndex={-1}
                caseSensitive={false}
                searchWords={[searchTerm]}
                textToHighlight={tool.description}
                display="block"
                color="#ffffff99"
                font_size="16px"
                margin="10px 0 20px 0"
              />
              {tool.tags &&
                tool.tags.length > 0 &&
                tool.tags.map(tag => (
                  <CardHighlighter
                    key={tag.id}
                    activeIndex={-1}
                    caseSensitive={false}
                    searchWords={[searchTerm]}
                    textToHighlight={`#${tag.name}`}
                    color="#fff"
                    font_weight="bold"
                    font_size="16px"
                    margin="0 10px 0 0"
                  />
                ))}
            </Card>
          ))
        ) : (
          <Card>
            <div>
              <CardTitle href="#">No tools registered</CardTitle>
            </div>
            <CardDescription>
              Register your first tool by clicking the add button
            </CardDescription>
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
            <Input
              label="Tool name *"
              placeholder="Ex: Javascript..."
              value={value => setTitle(value)}
            />
            <Input
              label="Tool link *"
              placeholder="Ex: https://developer.mozilla.org/..."
              value={value => setLink(value)}
            />
            <Input
              textArea
              label="Tool description *"
              placeholder="JavaScript is a programming language that allows you to implement complex things on web..."
              value={value => setDescription(value)}
            />
            <TagsInput label="Tags *" value={value => setTags(value)} />
            {tagsError && <ModalTagError>enter at least one tag</ModalTagError>}
            <SubmitButton>Add tool</SubmitButton>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Main;
