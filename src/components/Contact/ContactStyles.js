import styled from "styled-components";

export const TextField = styled.input`
  display: block;
  padding: 2rem;
  border: none;
  border-radius: 30px;
  background: ${(props) => (props.disabled ? "#d3d3d3" : "white")};
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  color: white;
  left: 10px;
  top: -15px;
  font-size: 0.8em;
  padding: 0.8rem;
  border-radius: 30px;
`;

export const FormControl = styled.div`
  position: relative;
  margin: 3rem 0;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 2rem;
  border-radius: 30px;
  resize: none;
  background: ${(props) => (props.disabled ? "#d3d3d3" : "white")};
`;

export const ContactForm = styled.form`
  padding: 0 5px;
  margin-bottom: 15px;
`;
