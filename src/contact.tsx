import styled from "styled-components";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ReactComponent as GitHub } from "./img/github.svg";
import { ReactComponent as LinkedIn } from "./img/linkedin.svg";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mlekkyll");
  const [showSuccess, setShowSuccess] = useState(false);

  console.log(state);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
    }
  }, [state]);

  return (
    <Container>
      <Title>Contact Mike</Title>
      <Content>
        If you're looking for a skilled professional to join your team or assist
        you on a project, I'm here to offer my expertise and passion. Let's work
        together to create something truly exceptional. <br />
        <br /> Feel free to check out these links or don't hesitate to send me a
        message and start a conversation!
      </Content>
      <LinksRow>
        <a
          href="https://github.com/mschoch62"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "16px" }}
        >
          <LinkButton>
            <GitHub
              style={{ fill: "#ffffff", width: "14px", marginRight: "8px" }}
            />
            GitHub
          </LinkButton>
        </a>
        <a
          href="https://www.linkedin.com/in/michaelschoch/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkButton>
            <LinkedIn
              style={{ fill: "#ffffff", width: "14px", marginRight: "8px" }}
            />
            LinkedIn
          </LinkButton>
        </a>
      </LinksRow>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput id="name" type="name" name="name" required={true} />
        <StyledValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <StyledLabel htmlFor="email">Email Address</StyledLabel>
        <StyledInput id="email" type="email" name="email" required={true} />
        <StyledValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <StyledLabel htmlFor="message">Message</StyledLabel>
        <StyledTextArea rows={5} id="message" name="message" required={true} />
        <StyledValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Submit type="submit" disabled={state.submitting}>
          Submit
        </Submit>
      </StyledForm>
      {showSuccess && (
        <SuccessMessage>
          Thanks for your message, I will get back to you as soon as I can!
        </SuccessMessage>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin-top: 32px;
  padding: 16px;
  box-sizing: border-box;

  @media screen and (max-width: 632px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

const Content = styled.div`
  margin: 16px 0;
`;

const LinksRow = styled.div`
  display: flex;
`;

const LinkButton = styled.button`
  padding: 16px;
  border: none;
  color: #ffffff;
  background-color: #12274a;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-top: 16px;
`;

const StyledLabel = styled.label`
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  margin-bottom: 16px;
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 16px;
`;

const SuccessMessage = styled.div``;

const StyledValidationError = styled(ValidationError)`
  color: red;
  font-size: 12px;
  margin-top: -16px;
  margin-bottom: 4px;
`;

const Submit = styled.button`
  padding: 16px;
  border: none;
  color: #ffffff;
  background-color: #cf1e51;
  border-radius: 4px;
  cursor: pointer;
`;
