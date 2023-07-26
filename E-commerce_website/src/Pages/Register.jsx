import styled from "styled-components";
import React, { useState } from 'react';
import { mobile } from "../responsive";

const Container=styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" )
  center;
  background-size: cover;

  display:flex;
  align-items: center;
  justify-content: center; 
`

const Wrapper=styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
}
`

const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form=styled.form`
display: flex;
flex-wrap: wrap;
`

const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

const Agreement=styled.span`
font-size: 12px;
margin: 20px 0px;
`

const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with form submission here
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Container>
     <Wrapper>
       <Title>CREATE AN ACCOUNT</Title>
       <Form onSubmit={handleSubmit}>
        <Input placeholder="First name" 
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}/>
        {errors.firstName && <span>{errors.firstName}</span>}
        <Input placeholder="last name"
         name="lastName"
         value={formData.lastName}
         onChange={handleChange}/>
         {errors.lastName && <span>{errors.lastName}</span>}
        <Input placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleChange}/>
         {errors.username && <span>{errors.username}</span>}
        <Input placeholder="email"
        name="email"
        value={formData.email}
        onChange={handleChange}/>
        {errors.email && <span>{errors.email}</span>}
        <Input placeholder="password"
         type="password"
         name="password"
         value={formData.password}
         onChange={handleChange}/>
         {errors.password && <span>{errors.password}</span>}
        <Input placeholder="confirm-password"
         type="password"
         name="confirmPassword"
         value={formData.confirmPassword}
         onChange={handleChange}/>
         {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button type="submit">CREATE</Button>
       </Form>
     </Wrapper>
    </Container>
  )
}

export default Register