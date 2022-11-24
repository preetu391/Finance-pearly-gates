import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import pic from "../photos/Rectangle 38.svg";
import { Box } from "@mui/system";

const SendLink = () => {
  const [data, setData] = useState({ password: "", password2: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Box mt={20}>
        <div className={styles.signup_container}>
          <div className={styles.signup_form_container}>
            <div className={styles.right}>
              <form
                action="/forgetPassword"
                method="post"
                className={styles.form_container}
                onSubmit={handleSubmit}
              >
                <h3>Reset Link Sent Successfully</h3>
                <h6>
                  Password reset link has been sent to ur email Successfully!
                </h6>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default SendLink;
