import styled from "styled-components";
import { LoginBoard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/features/redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/features/userSlice";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loading, userToken, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const logRef = useRef<HTMLElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
    dispatch(userLogin(data));
  };

  useEffect(() => {
    console.log("userToken changed:", userToken);
    if (userToken) {
      console.log("userToken", userToken);
      navigate("/");
    }
  }, [userToken, navigate]);

  console.log("Current Errors:", errors);
  console.log("Current User Token:", userToken);

  return (
    <Main>
      <LoginBoard
        title="Login"
        buttonText="Login to your account"
        question="Don’t have an account?"
        answer="Sign Up"
        onSubmit={() => {
          console.log("Form submission triggered");
          logRef.current?.dispatchEvent(
            new Event("submit", { bubbles: true, cancelable: true })
          );
        }}
      >
        <Form ref={logRef} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="email"
              {...register("email")}
              id="email"
              placeholder="Email Address"
              style={{
                borderColor: errors.email ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.email?.message}</Error>
          </div>
          <div>
            <Input
              type="password"
              {...register("password")}
              id="password"
              placeholder="password"
              style={{
                borderColor: errors.email ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.password?.message}</Error>
          </div>
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <LoadingMessage>Loading...</LoadingMessage>}
      </LoginBoard>
    </Main>
  );
};
export default Login;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
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

const Error = styled.p`
  color: #ee374a;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 12px;
  margin-bottom: 10px;
`;

const LoadingMessage = styled.div`
  color: #007bff;
  font-size: 12px;
  margin-bottom: 10px;
`;
