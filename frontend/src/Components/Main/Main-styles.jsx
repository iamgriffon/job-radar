import styled, {css} from 'styled-components';

export const UserPreviewHeaderStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const UserPreviewContainer = styled.main`
  flex: 1;
  margin-left: 20px;
  flex-direction: column;

  @media screen and (max-width: 1000px){
    display: flex;
    flex-direction: column;
    }
  }
`
export const UlContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 900px){
    display: flex;
    flex-direction: column;
  }
 
  & li {
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 20px;

    
  @media screen and (max-width: 900px){
    margin-top: 10px;
  }
`
export const UserPreviewImage = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  
`
export const UserPreviewHeader = styled.header`
${UserPreviewHeaderStyle}`;

export const UserPreviewInfo = styled.div`
margin-left: 10px;
`
export const UserPreviewName = styled.strong`
  ${UserPreviewInfo};
  display: block;
  font-size: 16px;
`
export const UserPreviewSkill = styled.span`
  font-size: 13px;
  color: #999;
  margin-top: 2px;
  display: grid;
`
export const UserPreviewBio = styled.p`
  color: #666;
  font-size: 13px;
  line-height: 20x;
  margin: 10px 0px;
`
export const UserPreviewPhone = styled.p`
  color: #666;
  font-size: 11px;
  line-height: 20x;
  margin: 10px 0px;
  font-weight: bold;
`
export const UserPreviewLink = styled.a`
  color: #8e4dff;
  font-size; 12px;
  text-decoration: none;

  &:hover{
    color: #5a2ea6;
  }
`