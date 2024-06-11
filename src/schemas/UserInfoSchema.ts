import * as yup from "yup";

const InfoSchema = yup.object().shape({
  firstName: yup.string().min(2).max(25).required("This field is required"),
  email: yup.string().email().required("This field is required"),
  password: yup
    .string()
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'
    )
    .required("This field is required"),
  photo: yup.string(), // Assuming that the photo is a string, you can adjust this validation based on your actual photo data type
});

export default InfoSchema;