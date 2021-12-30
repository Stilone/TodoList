import styled from 'styled-components';
import {Checkmark} from '../checkbox/checkbox.styles'

export const TodoTask = styled.ul`
  font-size: 16px;
  font-weight: 500;
`;

export const Text = styled.div<{mark: boolean}>`
  margin-left: 35px;
  ${props => props.mark ? `
  text-decoration: line-through;
  color: #4F5565;
  `: null}
`;

export const Task = styled.li`
  margin-bottom: 18px;
  list-style-type: none;
  display: flex;
  font-size: 16px;
  line-height: 20px;
  &:hover ${Text} {
    color: #FF8469;
  }
  &:active ${Text} {
    color: #FFFFFF;
    text-decoration: line-through;
  }
  &:hover ${Checkmark} {
    background: rgba(255, 132, 105, 0.2);
  }
`




