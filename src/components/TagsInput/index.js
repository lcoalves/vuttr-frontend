/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { Container } from './styles';

export default function TagsInput({ label, value }) {
  const [tags, setTags] = useState([]);

  function addTags(event) {
    if (event.key === ',' && event.target.value !== '') {
      setTags([...tags, event.target.value.replace(',', '')]);
      value([...tags, event.target.value.replace(',', '')]);
      event.target.value = '';
    }
  }

  function removeTags(index) {
    setTags([
      ...tags.filter(tag => {
        if (tags.indexOf(tag) !== index) return tag.replace(',', '');
      }),
    ]);
  }

  return (
    <Container className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <FaTimes
              color="#170C3AE6"
              size={8}
              className="tag-close-icon"
              onClick={() => removeTags(index)}
            />
          </li>
        ))}
      </ul>
      <p>
        {label} <br />
        <input
          type="text"
          onKeyUp={event => addTags(event)}
          placeholder="Insert comma to add new tag"
        />
      </p>
    </Container>
  );
}
