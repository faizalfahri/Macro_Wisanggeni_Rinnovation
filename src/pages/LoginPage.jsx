import { Container, Row, Col } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const LoginPage = () => {
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
                      <b>Sign In</b>
                    </h2>
                  </div>

                  <form className="login-form">
                    <div className="login-box">
                      <label for="email" className="login-label-email fw-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="login-input"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div class="login-box">
                      <label
                        for="password"
                        className="login-label-password fw-bold"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="login-input"
                        placeholder="Enter Your Password"
                      />
                    </div>
                    <NavLink
                      to="/sesudah-login"
                      className="login-button rounded-5 fw-bold"
                    >
                      Sign In
                    </NavLink>
                    <p className="pt-3">
                      Don't Have an Account?{" "}
                      <NavLink to="/register" className="login-signup">
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

export default LoginPage;
