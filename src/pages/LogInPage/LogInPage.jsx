import {useFormik} from "formik";
import {
  Box,
  Button,
  Flex,
  Heading, HStack,
  VStack
} from "@chakra-ui/react";
import InputField from "../../components/InputField/InputField";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import authOperations from "../../redux/auth/authOperations";

export function LogInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(authOperations.logIn(values))
    }
  });
  return (
    <Flex align="center" justify="flex-start" h="max-content">
      <Box bg="white" p={6} rounded="md">
        <Heading>Sign In</Heading>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <VStack spacing={4} align="flex-start">
            <InputField
              autoComplete="off"
              labelName="Email *"
              type="text"
              name="email"
              handlerEvent={formik.handleChange}
              value={formik.values.email}
              required
              width="100%"
            />
            <InputField
              autoComplete="off"
              labelName="Password *"
              type="password"
              name="password"
              handlerEvent={formik.handleChange}
              value={formik.values.password}
              required
              width="100%"
            />
            <HStack>
              <Button variant={'primary'} type="submit">Login</Button>
              <Button variant={'outline'} type="button" onClick={() => navigate('/registration')}>Register</Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
