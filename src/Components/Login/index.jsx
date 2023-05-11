import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import pic from "../photos/Rectangle 38.svg";
import { Box } from "@mui/material";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://finance-backend-lqvn.onrender.com/api/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard")
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
      <Box mt={10}>
        <div className={styles.signup_container}>
          <div className={styles.signup_form_container}>
            <div className={styles.left}>
              <img src={pic} alt="mypic" />
            </div>
            <div className={styles.right}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className={styles.input_box}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.input_box}>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required
                    className={styles.input}
                  />
                </div>
                <Box mt={3}>
                <h5><Link className={styles.linkStyle} to="/forgetpassword">
                  Forget Password
                </Link>
                </h5>
                </Box>
                {error && <div className={styles.error_msg}>{error}</div>}
                <button type="submit" className={styles.green_btn}>
                  Login
                </button>
                <h5>
                  Don't have an account?{" "}
                  <Link className={styles.linkStyle} to="/signup">
                    SignUp
                  </Link>
                </h5>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Login;
