import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2e2e2e50;
`;

export const ModalWrapper = styled.div`
  position: relative;
  padding: 28px 16px;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  transition: all 300ms ease-in-out;

  &:hover {
    fill: red;
  }
`;
