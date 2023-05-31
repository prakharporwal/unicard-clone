import {
  Box,
  Button,
  CardFooter,
  Container,
  DrawerFooter,
  Heading,
  Input,
} from "@chakra-ui/react";
import "./Secondpage.css";

const SecondPage = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      bg="white"
      display={"grid"}
      placeItems={"center"}
    >
      <Heading as="h3" width={"70%"}>
        Earn 1% assured cashback{" "}
        <span className="text-color-grey"> on your spends. Get </span> 5X more
        value than cashback{" "}
        <span className="text-color-grey">
          at the Uni Store. Enjoy round the clock
        </span>{" "}
        Whatsapp support.
        <span className="text-color-grey"> And it's </span>
        lifetime free;
        <span className="text-color-grey">
          {" "}
          no joining fee, no annual charges.
        </span>
      </Heading>
      <Container animation={"200ms linear"}>
        <Input></Input>
        <Button>Apply Now</Button>
      </Container>
    </Box>
  );
};

export default SecondPage;
