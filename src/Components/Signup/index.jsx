import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import pic from "../photos/Rectangle 38.svg";

const Signup = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
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
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <img src={pic} alt="mypic" />
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create &nbsp; Account</h1>
            <div className={styles.input_box}>
              <input
                type="text"
                placeholder="User Name"
                name="userName"
                onChange={handleChange}
                value={data.userName}
                required
                className={styles.input}
              />
            </div>
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
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Create Account
            </button>
            <h5>
              Already have an account?{" "}
              <Link className={styles.linkStyle} to="/login">
                Login
              </Link>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
