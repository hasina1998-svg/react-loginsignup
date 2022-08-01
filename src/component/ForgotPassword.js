import {
    Box,
    Flex,
    Text,
    FormControl,
    Input,
    FormLabel,
    Button,
  } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  import { Link, useNavigate } from "react-router-dom";
  import { greenColor } from "../constant/color";
  import { email, verifyYourEmail } from "../constant/constant";
  
  const ForgotPassword = ({ setView }) => {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };
    return (
      <div>
        <Flex justifyContent="center">
          <Box>
            <Text
              color={greenColor}
              fontSize="3xl"
              fontWeight="bold"
              fontStyle="italic"
              fontFamily="cursive"
            >
              Reset your password
            </Text>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isRequired>
                <FormLabel htmlFor="email">{email}</FormLabel>
                <Input
                  {...register("email", { required: true })}
                  id="email"
                  type="email"
                />
              </FormControl>
              <br />
              <Flex justifyContent="center">
                <Button
                  width="100%"
                  backgroundColor={greenColor}
                  onClick={() => navigate("/otphandler")}
                  type="submit"
                >
                  {verifyYourEmail}
                </Button>
              </Flex>
            </form>
            <br />
  
            <Flex justifyContent="center">
              <Button variant="link" onClick={() => setView("login")}>
                <Text color="red"> GO BACK TO LOGIN</Text>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </div>
    );
  };
  export default ForgotPassword;