import {
    Flex,
    Text,
    Box,
    SimpleGrid,
    GridItem,
    Button,
    IconButton,
    Input,
    FormControl,
    FormLabel,
    Checkbox,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
  // import { email, greenColor, login, password, signUp } from "../constant/color"
  import { FaFacebook, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
  import { useForm } from "react-hook-form";
  import { Link as RouterLink, useNavigate } from "react-router-dom";
  import { useState } from "react";
  import { toast } from "react-toastify";
  import { email, login, password, signUp } from "../constant/constant";
  import { greenColor } from "../constant/color";
  import ForgotPassword from "./ForgotPassword";
  import SignUp from "./SignUP";
  
  const Login = () => {
    // data to store the input field
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    // for checkbox
    const [checked, setChecked] = useState(false);
    // show hide check
    const [show, setShow] = useState(false);
    // yo state chai eutai page ma display garna ko lagi ho route change nagari
    const [view, setView] = useState("login");
    // funcion for show and hide
    const handleClick = () => {
      setShow(!show);
    };
    // for navigation
    const navigate = useNavigate();
    const handleCheckbox = () => {
      setChecked(!checked);
    };
  
    // for login button
    const onSubmit = (data) => {
      console.log(data);
      let getDataBox = JSON.parse(localStorage.getItem("dataBox"));
      console.log(getDataBox);
      // yo chai local storage ko data match bhayo bhane matra login hune
  
      if (
        data.email === getDataBox.email &&
        data.password === getDataBox.password
      ) {
        toast.success("Login Sucess", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Invalid username or password", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
  
      // toast garna lai submit bhayepaxi normla toast loign garepaxi
      // toast.success("Login sucessfuly",{
      //   position: toast.POSITION.TOP_CENTER
  
      //   })
    };
  
    return (
      <div>
        {/* to divide the full screen into pice of gird */}
        <SimpleGrid columns={5}>
          {/* reid item bhnaeko grid xutaunu ho base bhaneko mobile device ra md bhane laptop screen ra bigger device  ko lagi */}
          <GridItem colSpan={{ base: "5", md: "3" }}>
            {/* view bbhaneko state ho login xa bhane login page display gaarna ko lagi ho */}
            {/* yesma conditional rendering gareko xa  */}
            {view === "login" ? (
              <Box>
                {/* <Image src={logo} alt="Hello ther"/> */}
                <Flex
                  ml={10}
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  <Text
                    color={greenColor}
                    fontWeight="bold"
                    fontStyle="italic"
                    fontFamily="cursive"
                    fontSize="3xl"
                  >
                    Nepal
                  </Text>
                  <Text
                    fontWeight="bold"
                    fontStyle="italic"
                    fontFamily="cursive"
                    fontSize="3xl"
                  >
                    Tech
                  </Text>
                </Flex>
  
                <Text
                  color={greenColor}
                  fontStyle="italic"
                  fontFamily="cursive"
                  fontSize="3xl"
                  textAlign="center"
                  fontWeight="bold"
                >
                  Sign in to Nepal Tech
                </Text>
  
                <Text
                  color={greenColor}
                  fontWeight="bold"
                  textAlign="center"
                  fontSize="30px"
                >
                  ____________
                </Text>
                <br />
  
                <Flex justifyContent={"center"} gap="3">
                  <a href="https://www.facebook.com/login" target="_blank">
                    <IconButton
                      border="1px solid black"
                      borderRadius="full"
                      icon={<FaFacebook />}
                      variant="solid"
                      _hover={{ bgColor: "#395591" }}
                      flex
                      justifyContent="center"
                    />{" "}
                  </a>
  
                  <a href="https://www.linkedin.com/login" target="_blank">
                    <IconButton
                      border="1px solid black"
                      borderRadius="full"
                      icon={<FaLinkedinIn />}
                      variant="solid"
                      _hover={{ bgColor: "#288FB7" }}
                      flex
                      justifyContent="center"
                    />
                  </a>
                  <a href="https://www.google.com" target="_blank">
                    <IconButton
                      border="1px solid black"
                      borderRadius="full"
                      icon={<FaGooglePlusG />}
                      variant="solid"
                      _hover={{ bgColor: "#00A159" }}
                      flex
                      justifyContent="center"
                    />
                  </a>
                </Flex>
                <br />
                <Text textAlign="center" color="#A6AEB3">
                  or use your Email account
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex justifyContent="center">
                    <Box width={{ base: "90%", md: "40%" }}>
                      <FormControl isRequired>
                        <FormLabel htmlFor="email">{email}</FormLabel>
                        <Input
                          {...register("email", { required: true })}
                          placeholder="Enter Email Address"
                        />
                      </FormControl>
                      <br />
  
                      <FormControl isRequired>
                        <FormLabel>{password}</FormLabel>
                        <InputGroup size="md">
                          <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                            {...register("password", {
                              required: true,
                              maxLength: 10,
                              minLength: 4,
                              message:
                                "password lenth must be greater than 4 and less than equlas to 10.",
                            })}
                          />
                          <br />
  
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
  
                      <br />
                      <Flex justifyContent={"space-between"}>
                        <Checkbox onChange={handleCheckbox}>Remember me</Checkbox>
                        <Button
                          variant={"link"}
                          onClick={() => setView("forgot")}
                        >
                          <Text> Forgot password? </Text>
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>
                  <br />
                  <Flex justifyContent="center">
                    <Button
                      disabled={!checked}
                      backgroundColor={greenColor}
                      size="lg"
                      width="40%"
                      border="2px"
                      borderColor="black.500"
                      type="submit"
                    >
                      {login}
                    </Button>
                  </Flex>
                </form>
                <br />
                <Flex justifyContent="center">
                  <Text color="#A6AEB3">Privacy Policy ⬤ Terms&Conditions</Text>
                </Flex>
                <br />
              </Box>
            ) : view === "forgot" ? (
              <ForgotPassword setView={setView} />
            ) : view === "signup" ? (
              <SignUp setView={setView} />
            ) : (
              <>Invalid view</>
            )}
          </GridItem>
          {/* second grid */}
  
          <GridItem colSpan={{ base: "5", md: "2" }}>
            <Box bgColor={greenColor}>
              <Flex justifyContent="center" alignItems={"center"} height="100vh">
                <Box>
                  <Text
                    textAlign="center"
                    fontWeight="bold"
                    color="white"
                    fontSize="4xl"
                  >
                    Hello,Friends!
                  </Text>
  
                  <Text
                    color="white"
                    fontWeight="bold"
                    textAlign="center"
                    fontSize="30px"
                  >
                    ______
                  </Text>
                  <br></br>
                  <Text textAlign="center" color="white">
                    Sign in your account and start your journey with yartiTech. we
                    try our best to reach your goal,connect with us.........
                    <Text fontSize="3xl" color="black" fontFamily="cursive">
                      #NepalTech
                    </Text>
                  </Text>
                  <br />
                  <Flex justifyContent="center">
                    <Button
                      backgroundColor={greenColor}
                      size="lg"
                      width="40%"
                      border="2px"
                      borderColor="black.500"
                      onClick={() => setView("signup")}
                    >
                      {signUp}
                    </Button>
                  </Flex>
                  <br />
                  <br />
                  <br />
                  <Text
                    fontSize="2xl"
                    textAlign="center"
                    fontFamily="cursive"
                    fontWeight="light"
                  >
                    Designed by @ Hasina Dhungel
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </SimpleGrid>
      </div>
    );
  };
  export default Login;