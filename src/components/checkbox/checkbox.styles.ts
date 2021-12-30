import styled from 'styled-components';

export const Checkmark = styled.span<{checked: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  background-color: ${props => (props.checked? '#FF8469 !important': '#4F5565')};
  
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  
  :checked ~ ${Checkmark}:after {
    display: block;
  }
`;

export const ContainerCheckbox = styled.div<{checked: boolean}>`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;