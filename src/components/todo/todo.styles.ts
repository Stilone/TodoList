import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  * {
    @font-face {
      font-family: 'Montserrat', sans-serif;
      src: url('/fonts/Montserrat-Regular.ttf') format('ttf');
      font-weight: 400;
    }
    @font-face {
      font-family: 'Montserrat', sans-serif;
      src: url("/fonts/Montserrat-SemiBold.ttf") format('ttf');
      font-weight: 600;
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #FFFFFF;
    span, label {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #010920;
  height: 100vh;
`;

export const LastContainer = styled.div`
  width: 341.86px;
  height: 85.23px;
  background-color: #4F5565;
  transform: rotate(-4.48deg);
  border-radius: 20px;
  position: absolute;
  top: -25px;
  left: 3px;
`;

export const NextContainer = styled.div`
  width: 395.1px;
  height: 67.97px;
  background-color: #31394D;
  transform: rotate(-2.32deg);
  border-radius: 20px;
  position: absolute;
  top: -15px;
  left: 1px;
`;

export const Container = styled.div`
  margin-top: 162px;
  display: inline-block;
  position: relative;
`;

export const Todo = styled.div`
  width: 420px;
  min-height: 540px;
  background-color: #252E42;
  border-radius: 20px;
  padding: 30px;
  position: relative;
`;

export const TodoTitle = styled.span`
  display: block;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  margin-bottom: 30px;
`;

export const TodoButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  border: none;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 54px;
  height: 27px;
  border-radius: 7px;
  background-color: #FF8469;
  :hover {
    background-color: #D95133;
  }
  :active {
    border: 1px solid #FFFFFF;
    background-color: #252E42;
  }
`;

export const TodoButtonDelete = styled.button`
  font-weight: 500;
  font-size: 14px;
  border: none;
  position: absolute;
  top: 30px;
  right: 100px;
  width: 64px;
  height: 27px;
  border-radius: 7px;
  background-color: #FF8469;
  :hover {
    background-color: #D95133;
  }
  :active {
    border: 1px solid #FFFFFF;
    background-color: #252E42;
  }
`;

export const Author = styled.label`
    
`;