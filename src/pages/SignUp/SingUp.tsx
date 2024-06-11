import styled from "styled-components";
import { LoginBoard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../store/features/userSlice";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { InfoSchema } from "../../schemas";
import { RootState } from "../../store/features/redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const FormData = useSelector((state: RootState) => state.newUser);
  const navigate = useNavigate();

  const sendPostRequest = async (FormData: any) => {
    console.log("Sending POST request");
    try {
      const response = await axios.post(
        "https://entertainment-web-app-back-production.up.railway.app/api/register",
        FormData
      );
      console.log("POST request response:", response.data);
      navigate("/");
    } catch (error: any) {
      if (error.response.status === 400 && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        console.error("Error sending POST request:", error);
        setError("An error occurred while submitting your choice.");
      }
    }
  };

  const onSubmit = async (data: any) => {
    console.log("Submitting form");
    try {
      await sendPostRequest(data);
      console.log("Form submitted");
    } catch (error) {
      console.log(error);
    }
    console.log("Tamta");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InfoSchema),
    onSubmit: onSubmit,
  });

  // const handleVerifyClick = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://entertainment-web-app-back-production.up.railway.app/api/register",
  //       { FormData }
  //     );
  //     console.log("Email sent successfully!", response.data);
  //   } catch (error) {
  //     console.error("Failed to send email:", error);
  //   }
  //   // TODO: Implement email verification logic
  // };

  return (
    <Main>
      <LoginBoard
        title="Sign Up"
        buttonText="Create an account"
        question="Already have an account?"
        answer="Login"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              {...register("firstName", {
                onChange: (e) => {
                  console.log("onChange firstName:", e.target.value);
                  dispatch(
                    updateData({
                      property: "firstName",
                      value: e.target.value,
                    })
                  );
                },
              })}
              type="name"
              value={FormData.firstName}
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
              {...register("email", {
                onChange: (e) =>
                  dispatch(
                    updateData({
                      property: "email",
                      value: e.target.value,
                    })
                  ),
              })}
              type="email"
              value={FormData.email}
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
              {...register("password", {
                onChange: (e) =>
                  dispatch(
                    updateData({
                      property: "password",
                      value: e.target.value,
                    })
                  ),
              })}
              type="password"
              value={FormData.password}
              id="password"
              placeholder="password"
              style={{
                borderColor: errors.password ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.password?.message}</Error>
          </div>
          {/* <div>
            <Input
              type="password"
              value={formData.repeatPassword}
              id="repeatPassword"
              placeholder="Repeat Password"
              onChange={handleChange} // Add onChange to update the state on input change
            />
          </div> */}
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
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
