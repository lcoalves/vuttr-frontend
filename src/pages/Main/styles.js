import * as RHighlighter from 'react-highlight-words';

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  padding: 30px;
  margin: 80px auto;

  h1 {
    text-align: left;
    font: Semibold 42px/50px Source Sans Pro;
    letter-spacing: 0.84px;
    color: #fff;
    opacity: 1;
  }

  h2 {
    text-align: left;
    font: Semibold 36px/40px Source Sans Pro;
    letter-spacing: 0.72px;
    color: #fff;
    opacity: 1;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
  }

  input {
    background: #ffffff70;
    border: 0px;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    ::placeholder,
    :focus {
      color: #fff;
    }
  }

  label {
    font-size: 14px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;

    input {
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }
`;

export const AddButton = styled.button`
  background: #ffffff70;
  color: #fff;
  font-size: 16px;
  border: 0;
  padding: 10px 25px;
  border-radius: 4px;

  :hover {
    background: #ffffff90;
  }

  :active {
    background: #ffffffc9;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 10px 15px;
  margin-top: 30px;
  border-radius: 4px;
  background: #ffffff70;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CardTitle = styled.a`
  font-size: 25px;
  color: #fff;
`;

export const RemoveButton = styled.button`
  background: #feefee;
  color: #f95e5a;
  font-size: 16px;
  border: 0;
  padding: 2px 7px;
  border-radius: 4px;

  :hover {
    background: #fcd7d6;
  }

  :active {
    background: #fcc6c5;
  }
`;

export const CardDescription = styled.p`
  color: #ffffff99;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CardHighlighter = styled(RHighlighter)`
  /* color: #fff; */
  /* font-weight: bold; */
  /* font-size: 16px; */
  /* margin-right: 10px; */
  display: ${props => props.display};
  color: ${props => props.color};
  text-decoration: ${props => props.text_decoration};
  font-weight: ${props => props.font_weight};
  font-size: ${props => props.font_size};
  margin: ${props => props.margin};
`;

export const ModalTitle = styled.h2``;

export const ModalTagError = styled.p`
  color: #f95e5a;
  text-align: right;
  font-size: 16px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  background: #0dcb7d;
  color: #fff;
  font-size: 16px;
  margin-top: 30px;
  float: right;
  border: 0;
  padding: 10px 25px;
  border-radius: 4px;

  :hover {
    background: #10b26c;
  }

  :active {
    background: #0e995d;
  }
`;
