import styled, {css} from 'styled-components';

export const FormStyle = css`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid black;
`

export const FormBlockContainer = styled.div`
  width: 320px;
  background: #FFF;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 10px 20px;

  @media screen and (max-width: 800px){
    margin-top: 10px;
  }
`
export const FormInputContainer = styled.input`
  ${FormStyle}
`
export const FormInputLabel = styled.label`
  color: #ACACAC;
  font-size: 14px;
  display: block;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 15px;
`
export const FormCoordsContainer = styled.input`
  ${FormStyle}
  width: 125px;
`
export const FormsCoordsDiv = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`

export const FormButton = styled.button`
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border: 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  height: 32px;
  color: white;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  transition: background 0.5s;

  &:hover{
    background: #6931ca;
  }
`

export const FormInputTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
  padding-bottom: 10px;
  margin-top: 15px;
`
