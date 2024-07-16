import styled from "styled-components";
import { LoginBoard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InfoSchema } from "../../schemas";
import { AppDispatch, RootState } from "../../store/features/redux";
import { useNavigate } from "react-router-dom";
import { registerUser, resetSuccess } from "../../store/features/userSlice";
import { useEffect, useRef } from "react";

const SignUp = () => {
  const { loading, error, success } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const formRef = useRef<HTMLElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InfoSchema),
  });
  const onSubmit = (data: {
    firstName: string;
    email: string;
    password: string;
    photo?: string;
  }) => {
    console.log(data);
    dispatch(registerUser(data));
  };
  useEffect(() => {
    if (success) {
      alert(
        "Registration successful! Please check your email to verify your account."
      );
      navigate("/login");
      dispatch(resetSuccess());
    }
  }, [success, navigate, dispatch]);

  return (
    <Main>
      <LoginBoard
        title="Sign Up"
        buttonText="Create an account"
        question="Already have an account?"
        answer="Login"
        onSubmit={() => {
          formRef.current?.dispatchEvent(
            new Event("submit", { bubbles: true, cancelable: true })
          );
        }}
      >
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              {...register("firstName")}
              type="name"
              id="firstName"
              placeholder="First Name"
              style={{
                borderColor: errors.firstName ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.firstName?.message}</Error>
          </div>
          <div>
            <Input
              {...register("email")}
              type="email"
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
              {...register("password")}
              type="password"
              id="password"
              placeholder="password"
              style={{
                borderColor: errors.password ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.password?.message}</Error>
          </div>
          <div>
            <Input
              {...register("photo")}
              type="text"
              id="photo"
              placeholder="photoURL"
              style={{
                borderColor: errors.password ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.photo?.message}</Error>
          </div>
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <LoadingMessage>Loading...</LoadingMessage>}
      </LoginBoard>
    </Main>
  );
};
export default SignUp;

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
  gap: 16px;
  margin-bottom: 20px;
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
