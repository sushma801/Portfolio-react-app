import styled from "styled-components";
import tw from "twin.macro";

export const StyledContact = styled.div`
  ${tw`flex p-4 gap-x-4 w-full`};

  .left-container {
    ${tw`w-[80%]`}
  }

  .left-container,
  .contact-details,
  form,
  .form-container {
    ${tw`flex flex-col gap-y-4`}
  }

  .row-container {
    ${tw`flex flex-col gap-y-4 lg:(flex-row gap-x-4)`}
  }

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    ${tw`w-full lg:(w-[45%])`}
  }

  h1 {
    ${tw`text-cyan-800`}
    font-size: 1.5rem;
    font-family: cursive;
  }

  h2 {
    ${tw`text-cyan-800 underline`}
    font-size: 1rem;
    font-family: cursive;
    padding: 8px 0;
  }

  span {
    font-family: cursive;
  }

  .flat-button {
    align-self: center;
    background: #30639c;
    color: white;
    font-size: 24px;
    border-radius: 8px;
    padding: 8px 24px;
  }

  .contact-icons {
    ${tw`flex flex-col w-[15%]`}
  }
`;
