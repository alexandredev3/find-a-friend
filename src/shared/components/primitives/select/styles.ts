import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FilterLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`

export const FilterWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f75f64;
  border-radius: 15px;
  padding: 12px;

  position: relative;

  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    right: 18px;
    top: 50%;

    transform: translateY(-50%);
  }
`

export const FilterInput = styled.select`
  position: absolute;
  left: 0;
  padding: 12px;

  margin-right: 12px;

  z-index: 1;

  width: 100%;
  height: 60px;

  font-size: 16px;
  font-weight: 800;
  line-height: 19.2px;

  appearance: none;

  border: none !important;
  background-color: transparent;
  outline: none;
  color: #ffffff;

  &::before {
    content: '⌄';
    width: 12px;
    height: 6px;
    display: absolute;
    color: #ffffff;
  }

  & > option {
    background-color: #f75f64;
  }
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 5px 7px;
`
