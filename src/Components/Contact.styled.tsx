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

  h2 {
    ${tw`flex items-center gap-x-2`}
  }

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    ${tw`w-full lg:(w-[45%])`}
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
