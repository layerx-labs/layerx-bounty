import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1f1f1;
  /* padding: 20px; */
  /* max-width: 200px; */
  margin: 32px;
  border-radius: 8px;
`;

export const ImageContainer = styled.div<{ image: string }>`
  width: 100%;
  max-height: 200px;
  /* background-image: url({$props => props.image}); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  border-radius: 8px;

`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

export const Name = styled.h2`
  margin-top: 10px;
`;

export const Price = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

export const Photo = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export const Film = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export const LastLine = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
`;

export const Shares = styled.p`

`;

export const Location = styled.p`

`;