import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import pic from "../photos/Rectangle 38.svg";
import { Box } from "@mui/system";
import { useParams,useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const params = useParams();
  const [data, setData] = useState({ password: "", password2: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `https://finance-backend-lqvn.onrender.com/api/resetpassword/${params.id}/${params.token}`;
      const { data: res } = await axios.post(url, data);
      navigate("/login");
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
                <h1>Reset Password</h1>
                <h5>
                  We received a request to reset the password for your account.
                  Please enter it below.
                </h5>
                <div className={styles.input_box}>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.input_box}>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={handleChange}
                    value={data.password2}
                    required
                    className={styles.input}
                  />
                </div>
                {error && <div className={styles.error_msg}>{error}</div>}
                <button type="submit" className={styles.green_btn}>
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ResetPassword;
