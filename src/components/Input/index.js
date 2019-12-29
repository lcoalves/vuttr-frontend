import React from 'react';

import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export default function Input({ label, textArea, placeholder, value }) {
  function handleChange(event) {
    value(event.target.value);
  }

  return (
    <Container>
      {label}
      <br />
      {textArea ? (
        <textarea rows="7" onChange={event => handleChange(event)} />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          onChange={event => handleChange(event)}
        />
      )}
    </Container>
  );
}
