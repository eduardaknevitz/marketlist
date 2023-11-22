import { useAuthContext } from "contextos/Auth";
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState("");

  const navigate = useNavigate();
  const { login } = useAuthContext();

  const handleLogin = () => {
    if (email === "") {
      setInvalidCredentials("O email é de preenchimento obrigatório");
    } else if (password === "") {
      setInvalidCredentials("Senha é de preenchimento obrigatório");
    } else if (!validateEmail(email)) {
      setInvalidCredentials("Formato de email inválido");
    } else if (password.length < 8) {
      setInvalidCredentials("A senha deve ter no mínimo 8 caracteres");
    } else {
      login();
      navigate("/inicio");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <Form className={styles.form}>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Senha:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        {invalidCredentials && (
          <p className={styles.error}>{invalidCredentials}</p>
        )}
        <Button color="primary" onClick={handleLogin} className={styles.button}>
          Entrar
        </Button>
      </Form>
    </div>
  );
};

export default Login;
