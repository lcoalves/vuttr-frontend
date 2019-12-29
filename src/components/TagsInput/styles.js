import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 30px;

  input {
    flex: 1;
    width: 100%;
    margin-top: 5px;
    border: 1px solid #000;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  .tags-input {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0 8px;
    border: 1px solid #000;
    border-radius: 4px;

    input {
      flex: 1;
      width: 100%;
      border: none;
      height: 46px;
      font-size: 14px;
      padding: 4px 0 0 0;
      &:focus {
        outline: transparent;
      }
    }
  }

  #tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
  }

  .tag {
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: #170c3ae6;
    .tag-title {
      margin-top: 3px;
    }
    .tag-close-icon {
      display: block;
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      font-size: 14px;
      margin-left: 8px;
      color: #0052cc;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 567px) {
    .tags-input {
      width: calc(100vw - 32px);
    }
  }
`;
