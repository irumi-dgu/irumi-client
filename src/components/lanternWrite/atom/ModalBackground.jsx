import React from "react";
import styled from "styled-components";

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = ({ children }) => {
  return <BackgroundOverlay>{children}</BackgroundOverlay>;
};

export default ModalBackground;
