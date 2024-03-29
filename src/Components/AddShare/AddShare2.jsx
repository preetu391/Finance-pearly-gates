import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
// import pic from "../assets/Financial-Services-Under-GST.jpg";
import pic from "../photos/fimage.webp";
import { Box } from "@mui/system";

const AddShare2 = (props) => {

  const curruser = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate()

  if (!curruser) {
    navigate("/login")
  }

  const [data, setData] = useState({ companyName: "", noOfShare: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://finance-backend-lqvn.onrender.com/api/addshare";
      const { data: res } = await axios.post(url, data);
      // localStorage.setItem("token", res.token);
      // localStorage.setItem("user", JSON.stringify(res.data));
      // window.location = "/";
      console.log(data)
      navigate("/user/portfolio");
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
      <Box mt={5}>
        <div className={styles.signup_container}>
          <div className={styles.signup_form_container}>
            <div className={styles.left}>
              <img src={pic} alt="mypic" />
            </div>
            <div className={styles.right}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Add Share</h1>

                <div className={styles.input_box}>
                  <input
                    type="text"
                    placeholder="Company Name"
                    name="companyName"
                    onChange={handleChange}
                    value={data.companyName}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.input_box}>
                  <input
                    type="text"
                    placeholder="No of Share"
                    name="noOfShare"
                    onChange={handleChange}
                    value={data.noOfShare}
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

export default AddShare2;
