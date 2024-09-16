import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import defaultImage1 from "../../assets/bg1.png";
import defaultImage2 from "../../assets/bg2.png";
import defaultImage3 from "../../assets/bg3.png";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";

import shadow1 from "../../assets/shadow1.png";
import shadow2 from "../../assets/shadow2.png";
import shadow3 from "../../assets/shadow3.png";
import cover from "../../assets/card.png";
import { Button, Card } from "antd";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { setAuthModal, isUserLoggedIn } = useContext(UserContext);
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the value based on your definition of "mobile"
    };

    // Initial check
    checkScreenWidth();

    // Listen for window resize
    window.addEventListener("resize", checkScreenWidth);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const handleClick = (section: any) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const isExpanded = (section: any) => {
    return expandedSection === section;
  };
  const isShared = expandedSection === null;

  const showCard = (section: number) => {
    return (
      <motion.div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          zIndex: 9999,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
      >
        <Card
          bordered={false}
          hoverable
          style={{ width: 500 }}
          cover={
            <img
              alt="example"
              src={cover}
              style={{ height: 200, objectFit: "cover" }}
            />
          }
        >
          <>
            <h3>
              {section === 1
                ? "Operational Efficiency Solutions"
                : section === 2
                ? "Sustainability Solutions"
                : "Get data from your plant use indicators with confidence"}
            </h3>
            <div style={{ marginBottom: 30 }}>
              {section === 1
                ? "Z Prime Operational Efficiency solutions provide customisable dashboards and analytics tools to monitor and analyse data integrated from multiple sources. By providing a holistic view of plant-wide operations, Z Prime dashboards provide organisations with operational insights spanning manufacturing and water and wastewater plant productivity, equipment maintenance and the performance of industrial IoT sensors to help organisations enhance asset reliability, mitigate performance deterioration, and reduce operational costs."
                : section === 2
                ? "Z Prime Sustainability solutions enable organisations to enhance environmental reporting and set long-term sustainability goals to ensure adherence to industry regulations and standards, supported by advanced data analytics. Z Prime’s unique and comprehensive environmental and circularity assessment functions foster transparency and accountability while promoting sustainable and efficient resource use across sectors."
                : " Lorem ipsum dolor sit amet consectetur. Quam consectetur nec sedtincidunt purus aenean volutpat dignissim. Amet ultrices sit nequeac egestas semper ac at ipsum."}
            </div>
            <Button
              type="primary"
              className="mr-3"
              onClick={() => {
                if (!isUserLoggedIn) {
                  setAuthModal(true);
                  return;
                }
                window.open(" https://d1gy6jtatxn3cc.cloudfront.net/");
              }}
            >
              View Water Solution
            </Button>
            {section === 1 && (
              <Button
                type="primary"
                className="btnp"
                onClick={() => {
                  if (!isUserLoggedIn) {
                    setAuthModal(true);
                    return;
                  }
                  window.open("http://d24mwt6kussfzx.cloudfront.net/");
                }}
              >
                {"View Manufacturing Solution"}
              </Button>
            )}
          </>
        </Card>
      </motion.div>
    );
  };

  const getTintedColor = (section: any) => {
    switch (section) {
      case 1:
        return "linear-gradient(#3587E4, #1D4A7E)"; // Blue tint
      case 2:
        return "linear-gradient(#67E435, #397E1D)"; // Green tint
      case 3:
        return "linear-gradient(#424542, #343534)"; // Grey tint
      default:
        return "rgba(0, 0, 0, 0.5)";
    }
  };

  const getTitle = (section: any) => {
    switch (section) {
      case 1:
        return "Performance";
      case 2:
        return "Sustainability";
      case 3:
        return "Compliance";
      default:
        return "Compliance";
    }
  };

  return (
    <div className="container">
      {[1, 2, 3].map((section) => (
        <motion.div
          key={section}
          className="section"
          style={{
            backgroundImage:
              isShared || !isExpanded(section)
                ? `url(${
                    section === 1
                      ? defaultImage1
                      : section === 2
                      ? defaultImage2
                      : defaultImage3
                  })`
                : section === 1
                ? "linear-gradient(#3587E4, #1D4A7E)"
                : section === 2
                ? "linear-gradient(#67E435, #397E1D)"
                : "linear-gradient(#424542, #343534)",
            // backgroundColor:
            //   isExpanded(section) || !isShared
            //     ? getSolidColor(section)
            //     : "transparent",
            flex: isExpanded(section) ? 7 : 0.5, // More shrinking
          }}
          animate={{
            flex: isExpanded(section) ? 7 : 0.5, // More shrinking
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onClick={() => handleClick(section)}
          onMouseEnter={() => setHoveredSection(section)}
          onMouseLeave={() => setHoveredSection(0)}
        >
          <div
            className="overlay"
            style={{
              backgroundImage: getTintedColor(section),
              opacity:
                hoveredSection === section || isExpanded(section) ? 0.3 : 0.85,
            }}
          ></div>
          {!isShared && (
            <img
              src={section === 1 ? shadow1 : section === 2 ? shadow2 : shadow3}
              alt={`shadow for Section ${section}`}
              style={{ position: "absolute" }}
            />
          )}
          {/* <motion.img
            src={section === 1 ? logo1 : section === 2 ? logo2 : logo3}
            alt={`Logo for Section ${section}`}
            className="logo"
            animate={{
              opacity: isExpanded(section) ? 1 : 0.5,
              x: isExpanded(section) ? 0 : -50, // Shift left when not expanded
            }}
            transition={{ duration: 0.3 }}
          /> */}
          <div
            style={{
              padding: isExpanded(section) ? 60 : 30,
              zIndex: 999,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              width: "-webkit-fill-available",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div>
              <motion.h2
                style={{
                  fontWeight: 700,
                  zIndex: 999,
                  fontSize: 32,
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 0,
                }}
                initial={{ opacity: 1, y: 0 }}
                animate={{
                  // fontSize: isExpanded(section) ? "2.5rem" : "1.5rem",
                  opacity: 1,
                  y: hoveredSection === section && isShared ? -30 : 0,
                }}
                transition={{ duration: 0.1 }}
              >
                <motion.img
                  src={section === 1 ? logo1 : section === 2 ? logo2 : logo3}
                  alt={`Logo for Section ${section}`}
                  className="logo"
                />
                {(isExpanded(section) || isShared) && getTitle(section)}
              </motion.h2>
              {isShared && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredSection === section ? 1 : 0,
                    y: hoveredSection === section ? 0 : 50,
                  }}
                  transition={{ duration: 0.1 }}
                  style={{ fontSize: 16, textDecorationLine: "underline" }}
                >
                  View more about {getTitle(section)}
                </motion.p>
              )}
              {isExpanded(section) && (
                <div
                  style={{
                    color: "white",
                    paddingTop: 150,
                    position: "absolute",
                  }}
                >
                  VIEW LESS
                </div>
              )}
            </div>
            {isExpanded(section) && showCard(section)}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
