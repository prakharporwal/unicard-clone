import { Box, Button, Flex, Input, Link } from "@chakra-ui/react";
import "./FirstPage.css";
// import "./animate.css";

const FirstPage = (props) => {
  return (
    <div className="first-page">
      <nav className="navbar">
        <span className="company-logo">
          <img src="/uni/source" alt={"uni"} />
        </span>
        <button className="uni-check-redirect-button">
          <span className="button-text">Uni Paychek</span>
        </button>
      </nav>
      <section className="product-info">
        <Box className="left-section">
          <span className="product-text">
            <span className={"bold-text"}>NX Wave.</span>
            <span>The next-gen credit card for those who love rewards</span>
          </span>
          <Flex padding={"2"} gap={"8"}>
            <span>1% Cashback</span>
            <span>5x Rewards</span>
            <span> Zero Forex Markup</span>
          </Flex>
          <Flex align={"center"}>
            <Input
              placeholder="Enter Phone Number"
              width={"20rem"}
              height={"3rem"}
              background={"black"}
            ></Input>
            <a href="https://google.com">
              <Button className="submit-button" colorScheme="yellow">
                Apply Now
              </Button>
            </a>
          </Flex>
        </Box>
        <Box>
          <img src="/idk" alt="card-illustration"></img>
        </Box>
      </section>
    </div>
  );
};

export default FirstPage;
