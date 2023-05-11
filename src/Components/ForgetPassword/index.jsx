import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import pic from "../photos/Rectangle 38.svg";
import { Box } from "@mui/system";

const ForgetPassword = () => {
  const [data, setData] = useState({ email: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://finance-backend-lqvn.onrender.com/api/forgetpassword";
      const { data: res } = await axios.post(url, data);
      navigate("/sendlink");
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
      <Box mt={13}>
        <div className={styles.signup_container}>
          <div className={styles.signup_form_container}>
            <div className={styles.right}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Forget Password</h1>
                <h5>
                  Enter the Email Address associated with your
                  Finance-Pearly-Gate account.
                </h5>
                <div className={styles.input_box}>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                    className={styles.input}
                  />
                </div>
                {error && <div className={styles.error_msg}>{error}</div>}
                <button type="submit" className={styles.green_btn}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ForgetPassword;
