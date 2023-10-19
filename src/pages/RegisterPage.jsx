import { Container, Row, Col } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  let navigate = useNavigate();
  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col>
            <section className="login-section" id="login">
              <div className="login-container grid">
                <div className="login-card rounded-5">
                  <div className="login-description">
                    <h2>
                      <b>Sign Up</b>
                    </h2>
                  </div>

                  <form action="" className="login-form">
                    <div className="login-box">
                      <label for="email" className="login-label-email fw-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="login-input"
                        id="email"
                        name="user-email"
                        required
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="login-box">
                      <label for="email" className="login-label-email fw-bold">
                        Name
                      </label>
                      <input
                        type="email"
                        className="login-input"
                        id="email"
                        name="user-email"
                        required
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="login-box">
                      <label
                        for="password"
                        className="login-label-password fw-bold"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="login-input"
                        id="password"
                        name="user-password"
                        required
                        placeholder="Enter Your Password"
                      />
                    </div>
                    <div className="login-box">
                      <label
                        for="password"
                        className="login-label-password fw-bold"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="login-input"
                        id="password"
                        name="user-password"
                        required
                        placeholder="Re-Enter Your Password"
                      />
                    </div>
                    <div className="login-box">
                      <label for="email" className="login-label-email fw-bold">
                        Address
                      </label>
                      <textarea
                        type="email"
                        className="login-input"
                        id="email"
                        name="user-email"
                        required
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <button
                      className="login-button rounded-5 fw-bold"
                      onClick={() => navigate("/login")}
                    >
                      Sign Up
                    </button>
                    <p className="pt-3">
                      Already have an account?{" "}
                      <NavLink to="/login" className="login-signup">
                        Sign up
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
