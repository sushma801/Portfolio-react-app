import styled from "styled-components";
import tw from "twin.macro";

export const StyledContact = styled.div`
  ${tw`flex p-4 gap-x-4`};

  .left-container,
  .contact-details,
  form,
  .form-container {
    ${tw`flex flex-col gap-y-4`}
  }

  .row-container {
    ${tw`flex gap-x-4`}
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
    background: #30639c;
    color: white;
    font-size: 24px;
    align-self: center;
    border-radius: 8px;
    padding: 8px 24px;
  }
`;
