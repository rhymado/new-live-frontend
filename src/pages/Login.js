import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

function Login({ dispatch, location, history, auth }) {
  //   console.log(auth);
  const { state } = location;
  return (
    <div>
      {state && state.from && (
        <p>
          Harap Login terlebih dahulu untuk melihat halaman di{" "}
          {state.from.pathname}
        </p>
      )}
      <p>Login Page</p>
      {auth.isLogin ? (
        <Button className="mx-1" onClick={() => dispatch({ type: "LOGOUT" })}>
          Logout
        </Button>
      ) : (
        <Button className="mx-1" onClick={() => dispatch({ type: "LOGIN" })}>
          Login
        </Button>
      )}
      <Button className="mx-1" onClick={() => history.push("/protected")}>
        Navigate to protected
      </Button>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Login);
