import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const RegisterScreen = props => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userRegister = useSelector(state => state.userRegister);

  const { userInfo, loading, error } = userRegister;
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Register</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFOr="name">Name</label>
          <input
            type="name"
            id="name"
            placeholder="Enter name"
            required
            onChange={e => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFOr="email">Email Address </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFOr="password">Password </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFOr="confirmPassword">Confirm Password </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={e => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label></label>
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account? <Link to="/signin">Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default RegisterScreen;
