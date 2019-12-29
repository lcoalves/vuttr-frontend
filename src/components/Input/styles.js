import styled from 'styled-components';

export const Container = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 30px;

  input {
    flex: 1;
    margin-top: 5px;
    border: 1px solid #000;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  textarea {
    flex: 1;
    max-width: 100%;
    min-width: 100%;
    margin-top: 5px;
    border: 1px solid #000;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
