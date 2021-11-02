import React, { useState, useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  TextField,
  TextArea,
  ContactForm,
  Label,
  FormControl,
} from "./ContactStyles";
import { AiOutlineCheck, AiOutlineMail } from "react-icons/ai";
import Loader from "react-loader-spinner";
import emailKey from "../../constants/keys";
import emailjs from "emailjs-com";

const defaultValues = { email: "", fullname: "", message: "" };

const Contact = () => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    temp.email = values.email !== "" ? "" : "Email is required.";
    temp.fullname = values.fullname !== "" ? "" : "Full name is required.";
    temp.message = values.message !== "" ? "" : "Please Enter Some Comments.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSending(true);
      emailjs
        .sendForm(
          emailKey.SERVICE_ID,
          emailKey.TEMPLATE_ID,
          e.target,
          emailKey.USER_ID
        )
        .then(() => setSuccess(true));
    }
  };

  const resetForm = () => {
    setValues(defaultValues);
    setErrors({});
  };

  useEffect(() => {
    let mounted = true;
    if (success) {
      setSending(false);
      setTimeout(() => {
        if (mounted) {
          setSuccess(false);
          resetForm();
        }
      }, 2000);
    }
  }, [success]);

  return (
    <Section id="contact">
      <SectionDivider />
      <br />
      <SectionTitle>Contact</SectionTitle>
      <SectionText>I'm open to new opportunities.</SectionText>
      <ContactForm noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <TextField
            disabled={sending || success}
            type="email"
            label="Email"
            name="email"
            id="email"
            placeholder="Enter your email here..."
            value={values.email}
            onChange={handleChange}
          />
          {errors.email}
        </FormControl>
        <FormControl>
          <Label htmlFor="fullname">Full Name</Label>
          <TextField
            disabled={sending || success}
            type="text"
            label="Full Name"
            name="fullname"
            id="fullname"
            placeholder="Enter your name here..."
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname}
        </FormControl>
        <FormControl>
          <Label htmlFor="comments">Comment</Label>
          <TextArea
            disabled={sending || success}
            rows="4"
            placeholder="Enter your comments here...."
            name="message"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message}
        </FormControl>
        <Button type="submit" disabled={sending || success}>
          {sending && (
            <>
              <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
              <span style={{ marginLeft: "5px" }}> Sending</span>
            </>
          )}
          {!sending && success && (
            <>
              <AiOutlineCheck />
              <span style={{ marginLeft: "5px" }}> Sent</span>
            </>
          )}
          {!sending && !success && (
            <>
              <AiOutlineMail /> <span style={{ marginLeft: "5px" }}> Send</span>
            </>
          )}
        </Button>
      </ContactForm>
    </Section>
  );
};

export default Contact;
