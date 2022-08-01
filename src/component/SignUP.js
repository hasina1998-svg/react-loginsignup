import { Flex, Box, Text, FormControl, FormLabel, Input, InputRightElement, Button, InputGroup, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { greenColor } from "../constant/color"
import { confirmPassword, country, createAccount, email, firstName, lastName, password, state, zipCode } from "../constant/constant"
const SignUp = ({setView}) => {
    const { register,handleSubmit ,formState:{errors}} = useForm()
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => {
        setShow(!show)
    }
// to set user data item in localstorage
// useEffect(()=>{
// localStorage.setItem("dataBox",JSON.stringify(userData))
// },[userData])


const onSubmit=(data)=>{
    console.log(data)
    if (data.password!=data.confirmPassword)
    
    {
        toast.error("password not matched",{
            position:toast.POSITION.TOP_CENTER
            
        })
    }
    else{

        toast.success("Created account sucessfully",{
            position : toast.POSITION.TOP_CENTER
        })

localStorage.setItem("dataBox",JSON.stringify(data))


    }

    
}

    return (
        <div>
            <Flex justifyContent="center" >
                <Box width={{ "base": "90%", "md": setView?"40%":"30%"}} >
                    <Text
                        color={greenColor}
                        fontSize="3xl"
                        fontWeight="bold"
                        fontStyle="italic"
                        fontFamily="cursive"
                    >Create Account In yartiTech </Text>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)} >
                    <FormControl isRequired >
                        <FormLabel >{firstName}</FormLabel>
                        <Input {...register("firstName",{required:true})} />
                    </FormControl>
                    <br />
                    <FormControl isRequired >
                        <FormLabel >{lastName}</FormLabel>
                        <Input {...register("lastName",{required:true})} />
                    </FormControl>
                    <br />
                    <FormControl isRequired >
                        <FormLabel >{email}</FormLabel>
                        <Input {...register("email",{required:true})} id="email" />
                    </FormControl>
                    <br />
                    <FormControl isRequired >
                        <FormLabel>{password}</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show === true ? 'text' : 'password'}
                                placeholder='Enter password'
                                {...register("password",{required:true})}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show === true? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <br />
                    <FormControl isRequired >
                        <FormLabel >{confirmPassword}</FormLabel>
                        <Input {...register("confirmPassword",{required:true})} 
                        type={show? 'text':"password"}
                        />
                    </FormControl>
                    <br />
                    <FormControl isRequired >
                        <FormLabel >{country}</FormLabel>
                        <Select  {...register("country",{required:true})}id='country' placeholder='Select country'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                            <option>Nepal</option>
                            <option>India</option>
                            <option>China</option>


                        </Select>
                    </FormControl>
                    <br />
                    <Flex justifyContent="space-around" gap={5} >
                        <FormControl isRequired >
                            <FormLabel >{state}</FormLabel>
                            <Input {...register("state",{required:true})} />
                        </FormControl>

                        <FormControl isRequired >
                            <FormLabel >{zipCode}</FormLabel>
                            <Input {...register("zipcode",{required:true})} />
                        </FormControl>
                    </Flex>
                    <br />
                    <Flex justifyContent="center" >
                        <Button
                            width="100%"
                            size='lg'
                            border='2px'
                            borderColor='black.500'
                            backgroundColor={greenColor}
                            // onClick={() => navigate('/')}
                            type="submit"
                        >{createAccount}</Button>
                    </Flex>
                    
                    </form>
                    
                </Box>

            </Flex>
            <br/>
            <Flex justifyContent="center" >
<Button variant= "link" onClick = {()=>setView("login")}>
<Text
color="red"
>  GO BACK TO LOGIN</Text>
</Button>
</Flex>


        </div>
    )
}
export default SignUp