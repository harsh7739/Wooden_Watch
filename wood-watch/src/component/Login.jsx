import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input ,
    Center,
    Card,
    Flex,
    Button,
  } from '@chakra-ui/react'


function Login(){
    return (
        <>
        <h1>Login Page</h1>
        <Flex textAlign={"center"} justifyContent={"center"}>


        <Card border={"1px solid red"} h={"90vh"}  w={"50%"} m={"auto"} 
        style={{ 
            backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/5cac91160424715.63b45561658d5.png")`}} >
                <Center  color='white'>
               <h1>Welcome to Wooden Watch</h1>
               
               </Center>
         </Card>
         <Card w={"50%"} bg='rgb(83,63,34)' m={"auto"} h={"90vh"} color={"white"}>



         <Center>
        <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input type='text'  placeholder='Enter your name'/>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Enter Email' />
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Enter password'/>
            <FormHelperText>We'll never share your data.</FormHelperText>
            <Button
            mt={4}
            colorScheme='teal'
            // isLoading={props.isSubmitting}
            type='submit'
            bg={"teal"}
            p={"10px"}
            color={"orange"}
            fontSize={"20px"}
          >
            Submit
          </Button>
        </FormControl>
        </Center>
       </Card>
          </Flex>
        </>
    )
}
export default Login