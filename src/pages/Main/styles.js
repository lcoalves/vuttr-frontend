import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 40px;
    color: #fff;
  }

  h2 {
    font-size: 25px;
    color: #fff;
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
  font-size: 16px;
  color: #ffffff99;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CardTags = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;

export const ModalTitle = styled.h2``;

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
