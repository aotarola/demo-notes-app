import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import {onError} from '../lib/errorLib'
import {Auth} from "aws-amplify";
import {useAppContext} from "../lib/contextLib"
import "./Login.css";
import {useFormFields} from '../lib/hooksLib'

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false)


  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true)
    } catch(e){
      onError(e)
      setIsLoading(false)
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block="true"
          size="lg"
          type="submit"
          disabled={!validateForm()}
          isLoading={isLoading}>
              Login
        </LoaderButton>
      </Form>
    </div>
  );
}
