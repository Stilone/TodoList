import styled from "styled-components";

export const NewTaskComponent = styled.div`
  margin-bottom: 20px;
`

export const AddTaskTitle = styled.label`
  margin-right: 70px;
`

export const AddTaskInput = styled.input`
  margin-right: 10px;
  background: transparent;
  border: transparent;
  border-bottom: 1px solid #FFFFFF;
`

export const AddButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  border: none;
  width: 34px;
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
`