import styled from 'styled-components'

export const Container = styled.div`
  width: 174px;
  height: 106px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.blue[700_10]};

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme }) => theme.blue[700]};
    margin-top: 12px;
  }
`
