import { Box, Flex, Text ,Button,PinInput,PinInputField, HStack,FormControl,FormLabel,InputGroup,Input,InputRightElement,} from "@chakra-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { greenColor } from "../constant/color"
import { confirmPassword, password, resetSucessfully } from "../constant/constant"
const OtpHandler=()=>{
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm()
    const[show,setShow]=useState(false)
    const onSubmit=(data)=>{
        console.log(data)
    }
    const handleClick=()=>{
        setShow(!show)
    }
    const notify=()=>{
        toast.success("Password changed sucessfuly",{
        position: toast.POSITION.TOP_CENTER
      
        })
      }
    return(
        <div>
<Flex justifyContent="center" >
    <Box>
        <Text
        color={greenColor}
        fontSize="3xl"
        fontWeight="bold"
        fontStyle="italic"
        fontFamily="cursive"
        >Enter the otp code here!!</Text>
<br/>
<HStack>
  <PinInput type='alphanumeric' mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
  </HStack>
  <br/>
  <form onSubmit={handleSubmit(onSubmit)} >
  <FormControl isRequired >
<FormLabel>{password}</FormLabel>
<InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        {...register("password",{required:true})}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </FormControl>
    <br/>
<FormControl isRequired >
  <FormLabel >{confirmPassword}</FormLabel>
  <Input {...register("conformpassword",{required:true})} id="password" />
</FormControl>
<br/>
        <Flex justifyContent="center" >
<Button 
width="100%"
backgroundColor={greenColor}
// onClick={()=>navigate('/')}
onClick={notify}
type="submit"
>{resetSucessfully}</Button>
</Flex>
</form>
    </Box>
</Flex>
        </div>
    )
}
export default OtpHandler