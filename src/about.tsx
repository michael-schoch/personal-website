import styled from "styled-components";
import React from "react";

export const About = () => {
  return (
    <>
      <Foo>About</Foo>
    </>
  );
};

const Foo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;
