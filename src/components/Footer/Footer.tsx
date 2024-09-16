import { Col, Layout, Row } from "antd";
import logo from "../../assets/zprime_logo.png";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Linkedin from "../../assets/LinkedIn.png";
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className={classes.contr}>
      <Row style={{ justifyContent: "flex-start" }}>
        <Col xs={24} md={12} style={{}}>
          <Link
            to="/"
            className={classes.logo}
            style={{ lineHeight: "0", marginRight: 16 }}
          >
            <div className={classes.logoCtr}>
              <img src={logo} alt="logo" style={{}} />
            </div>
          </Link>
          <div className={classes.displayLinebreak}>
            Powering Industrial Excellence
          </div>
          <div className={classes.displayLinebreak}>
            {" "}
            AI Enabler platforms & solutions
          </div>
          <div className={classes.displayLinebreak}>
            {" "}
            to Evolve, Optimize and Drive Transformation
          </div>
          <div style={{ marginTop: 8 }}>
            <a href="https://www.linkedin.com/company/z-prime/" target="_blank">
              <img src={Linkedin} alt="linkedin" />
            </a>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <h4>Quick Links</h4>
          <div className={classes.verticalMenu}>
            <a href="https://zprime.ai/about/" target="_blank">
              About us
            </a>
            <a href="https://zprime.ai/products/" target="_blank">
              Product
            </a>
            <a href="https://zprime.ai/solutions/" target="_blank">
              Solutions
            </a>
            <a href="https://zprime.ai/solutions/">Case studies</a>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <h4>Supports</h4>
          <div className={classes.verticalMenu}>
            <a href="https://zprime.ai/" target="_blank">
              Getting started
            </a>
            <a href="https://zprime.ai/contact/" target="_blank">
              Help center
            </a>
            <Link to="/">Server status</Link>
            <a href="https://zprime.ai/contact/" target="_blank">
              Report a bug
            </a>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <h4>Contact us</h4>
          <div className={classes.verticalMenu}>
            <Link to="/">
              {" "}
              <BsEnvelope />
              help@z-prime.com
            </Link>
            <Link to="/">
              <FiPhone />
              (414) 687 - 5892
            </Link>
            <Link to="/" style={{ alignItems: "baseline" }}>
              <div>
                <SlLocationPin />
              </div>
              <span>794 Mcallister St London, 94102</span>
            </Link>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Row justify="space-between" style={{ color: "#6F6C90" }}>
        <Col>Copyright © 2024 Z-Prime</Col>
        <Col>
          All Rights Reserved |{" "}
          <a href="https://zprime.ai/terms-conditions/" target="_blank">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="https://zprime.ai/privacy-policy/" target="_blank">
            Privacy Policy{" "}
          </a>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
