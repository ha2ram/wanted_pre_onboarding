import styled from 'styled-components';
import React, { useState } from 'react';

const Container = styled.div`
  width: 40%;
  height: 300px;
  margin: 20px auto;
  border: 2px solid lightgrey;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 20px;
  border: none;
  border-radius: 30px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 12px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
`;

const Content = styled.p`
  font-size: 20px;
`;

function Modal() {
  let [Modal, setModal] = useState('false');

  const showModal = () => {
    setModal(!Modal);
  };

  const closeModal = () => {
    setModal(!Modal);
  };

  return (
    <Container>
      <Button onClick={showModal}>Open Modal</Button>
      {Modal === true ? (
        <Background>
          <ModalBox>
            <CloseBtn onClick={closeModal}>X</CloseBtn>
            <Content>HELLO CODESTATES!</Content>
          </ModalBox>
        </Background>
      ) : null}
    </Container>
  );
}

export default Modal;
