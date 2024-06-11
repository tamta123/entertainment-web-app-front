import { useRef } from "react";
import styled from "styled-components";

type PropsType = {
  title: string;
  children: React.ReactNode; // Use React.ReactNode for children
  buttonText: string;
  question: string;
  answer: any;
  onSubmit: any;
};

const LoginBoard: React.FC<PropsType> = ({
  title,
  children,
  buttonText,
  question,
  answer,
  onSubmit,
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = () => {
    // Check if the form reference is available
    if (formRef.current) {
      // Programmatically trigger the form submission
      formRef.current.submit();
    }
  };

  return (
    <Wrapper onClick={onSubmit}>
      <Title>{title}</Title>
      <div>{children}</div>
      <Button onClick={handleSubmit}>{buttonText}</Button>
      <QuestionWrap>
        <Question>{question}</Question>
        <Answer>{answer}</Answer>
      </QuestionWrap>
    </Wrapper>
  );
};

export default LoginBoard;

const Wrapper = styled.div`
  padding: 24px 24px 32px 24px;
  border-radius: 10px;
  background: #161d2f;
  width: 90%;
  height: auto;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  border-radius: 6px;
  background: #fc4747;
  width: 100%;
  height: 48px;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  outline: none;
  margin-bottom: 24px;
`;

const Question = styled.span`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Answer = styled.span`
  color: #fc4747;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const QuestionWrap = styled.div`
  display: flex;
  gap: 9px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
