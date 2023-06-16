import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input ,
    Center,
    Flex,
    Card,
    Button,
    Box 
  } from '@chakra-ui/react'


function Signup(){
    return (
        <>
      
        <Flex textAlign={"center"} justifyContent={"center"}>
        
        <Card border={"1px solid red"} h={"90vh"}  w={"50%"} m={"auto"} 
        style={{ 
            backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/5cac91160424715.63b45561658d5.png")`}} >
                <Center  color='white'>
               <h1>Welcome to Wooden Watch</h1>
               
               </Center>
         </Card>
         
        <Card w={"50%"} bg='rgb(83,63,34)' m={"auto"} h={"90vh"} color={"white"}>
        
        <Center  color='white'>
        
  
             <div>
        
        <FormControl>
        <    FormLabel>Your First Name</FormLabel>
            <Input type='text' placeholder='Enter Your First Name' />
            <FormLabel>Your Last Name</FormLabel>
            <Input type='text' placeholder='Enter Last Name ' />
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Enter Email' />
            <FormLabel>Password</FormLabel>
            <Input type='email' placeholder='Enter Password' />
         
            <FormHelperText>We'll never share your Data.</FormHelperText>

            <Button
            mt={4}
            colorScheme='teal'
            // isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>

        </FormControl>
        </div>
        
        </Center>
        
        </Card>
        
        
        </Flex>
        
        </>
    )
}
export default Signup