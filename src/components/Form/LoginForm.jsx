import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import useLogin from "../../authentication/useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const SignUp = styled.span`
  color:var(--color-brand-500);
  text-decoration: underline;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover{
    color:var(--color-brand-700)
  }
`
function LoginForm() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("nk@gmail.com");
  // const [password, setPassword] = useState("123456");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userLogin: login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large"
          disabled={isLoading}
        >
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <FormRowVertical>
        <p style={{ textAlign: 'center' }}> Don't have an account? <SignUp onClick={() => navigate("/register")}>Sign Up</SignUp></p>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
