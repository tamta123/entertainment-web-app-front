import styled from "styled-components";
import { LoginBoard } from "../../components";

const Login = () => {
  return (
    <Main>
      <LoginBoard
        title="Login"
        buttonText="Login to your account"
        question="Don’t have an account?"
        answer="Sign Up"
      >
        <Form>
          <div>
            <Input
              type="email"
              // value={value}
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <Input
              type="password"
              // value={value}
              id="password"
              placeholder="password"
            />
          </div>
        </Form>
      </LoginBoard>
    </Main>
  );
};
export default Login;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 37px;
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background: #161d2f;
  border: none;
  padding-left: 16px;
  padding-bottom: 18px;
  border-bottom: 1px solid #5a698f;
`;
