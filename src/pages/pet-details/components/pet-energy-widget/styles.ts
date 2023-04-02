import styled from 'styled-components'

export const Container = styled.div`
  width: 174px;
  height: 106px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.blue[700_10]};

  .rating_icones_wrapper {
    display: flex;
    gap: 6px;

    margin-bottom: 12px;
  }

  span {
    font-weight: 600;
    font-size: 18px;
    color: ${({ theme }) => theme.blue[700]};
  }
`
