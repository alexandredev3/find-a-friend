import styled from 'styled-components'

export const GalleryContainer = styled.div`
  display: grid;
  grid-column: 1 / 4;

  & > img {
    width: 100%;
    height: 336px;
    border-radius: 20px 20px 0 0;
  }
`

export const GalleryCollection = styled.ul`
  max-width: 560px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 18px;

  & > li {
    padding: 0 5px 0 5px;
    list-style: none;
  }
`

export const GallerySelectButton = styled.button<GallerySelectProps>`
  outline-color: ${({ theme }) => theme.blue[700]};
  background-color: transparent;
  padding: 0;
  border-radius: 15px;
  border: 0;
  font-size: 0;

  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.3)};

  img {
    width: 80px;
    height: 80px;
    border-radius: 15px;
    border: ${({ theme, isSelected }) =>
      isSelected ? `4px solid ${theme.blue[700]}` : 'none'};
  }
`
