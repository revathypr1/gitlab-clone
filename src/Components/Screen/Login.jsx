import React from "react";
import logo from "../../assets/images/image-git.jpeg";
import styled from "styled-components";

export default function Login() {
  return (
    <div>
      <Maincontainer>
        <ImageContainer>
          <Image src={logo} alt="image" />
        </ImageContainer>
        <Title>Sign in to GitHub</Title>
        <TotalDiv>
          <OneInput>
            <Paragraph>Username or email address</Paragraph>
            <Input type="text" placeholder="" />
          </OneInput>
          <TwoInput>
            <InputContainer>
              <Paragraph>Password</Paragraph>
              <Forgot>forgot Password?</Forgot>
            </InputContainer>
            <Input type="password" placeholder="" />
            <InputButton>Sign In</InputButton>
          </TwoInput>
        </TotalDiv>
        <BottomInput>
          New to GitHub?<Small> Create an account </Small>
        </BottomInput>
        <LoginBottom>
          <Span>Terms</Span>
          <Span>privacy</Span>
          <Span>Security</Span>
          <Last>Contact GitHub</Last>
        </LoginBottom>
      </Maincontainer>
    </div>
  );
}

const Maincontainer = styled.div`
  width: 24%;
  margin: 0 auto;
  padding: 35px;
`;
const ImageContainer = styled.div`
  width: 49px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #fff;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const Title = styled.span`
  margin: 20px;
  font-size: 27px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const TotalDiv = styled.div`
  background-color: #d8dee43d;
  padding: 25px;
  border: 1px solid #d8dee4;
  border-radius: 5px;
`;
const OneInput = styled.div``;
const Paragraph = styled.p`
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: #d8dee4;
  height: 32px;
  border: 1px solid #d8dee4;
  border-radius: 5px;
  &:hover {
    outline-color: #1575e5;
  }
`;
const TwoInput = styled.div``;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Forgot = styled.p`
  color: #3785e0;
  font-size: 14px;
  cursor: pointer;
`;
const InputButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: 1px solid #0d852f;
  border-radius: 3px;
  background-color: #2da44e;
  color: #ffff;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #0d852f;
  }
`;
const BottomInput = styled.div`
  border: 1px solid #d8dee4 !important;
  padding: 16px 16px;
  border-radius: 3px;
  margin: 19px 0px;
  width: 91%;
  text-align: center;
`;
const Small = styled.span`
  color: #3785e0;
  font-size: 16px;
  cursor: pointer;
`;
const LoginBottom = styled.div`
  margin-top: 20%;
  text-align: center;
`;
const Span = styled.span`
  font-size: 14px;
  margin-right: 25px;
  display: inline-block;
  cursor: pointer;
  color: #3785e0;
  &:last-child {
    margin-right: 0px;
  }
`;
const Last = styled.span`
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
`;
