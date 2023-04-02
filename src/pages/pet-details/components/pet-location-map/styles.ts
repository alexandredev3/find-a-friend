import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 227px;

  .leaflet-container {
    border-radius: 20px;
  }
`

export const MapFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(64px + 20px);

  margin-top: -20px;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  background: ${({ theme }) => theme.blue[700]};

  & > button {
    margin-top: 20px;

    outline: ${({ theme }) => theme.blue[700]};
    border: none;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.yellow[300]};
    background: transparent;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
