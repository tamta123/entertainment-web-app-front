import styled from "styled-components";
import { LoginBoard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFormData,
  setFormData,
  submitForm,
} from "../../store/features/formSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const handleSignUp = () => {
    // Dispatch the submitForm action, which is an async thunk
    dispatch(submitForm(formData)); // Corrected: pass formData.form
  };

  console.log("Form Data Before:", formData); // Corrected: log formData.form

  const handleChange = (e) => {
    e.preventDefault();
    // Dispatch setFormData to update the form state
    dispatch(setFormData({ [e.target.id]: e.target.value }));
  };

  console.log("Form Data After:", formData); // Corrected: log formData.form

  return (
    <Main>
      <LoginBoard
        title="Sign Up"
        buttonText="Create an account"
        question="Already have an account?"
        answer="Login"
      >
        <Form onSubmit={handleSignUp}>
          <div>
            <Input
              type="name"
              value={formData.firstName}
              id="firstName"
              placeholder="First Name"
              onChange={handleChange} // Add onChange to update the state on input change
            />
          </div>
          <div>
            <Input
              type="email"
              value={formData.email}
              id="email"
              placeholder="Email Address"
              onChange={handleChange} // Add onChange to update the state on input change
            />
          </div>
          <div>
            <Input
              type="password"
              value={formData.password}
              id="password"
              placeholder="password"
              onChange={handleChange} // Add onChange to update the state on input change
            />
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
          <button
            type="submit" // Pass the handleSignUp function here
          >
            submit
          </button>
        </Form>
      </LoginBoard>
    </Main>
  );
};
export default SignUp;

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
