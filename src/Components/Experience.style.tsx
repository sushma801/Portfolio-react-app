import styled from "styled-components";
import tw from "twin.macro";

export const StyledExperience = styled.div`
  ${tw`flex p-4 flex-col`}

  .work-container {
    ${tw`px-4`}
  }

  .describtion {
    font-family: cursive;
    word-wrap: break-word;
    word-spacing: 8px;
  }

  span {
    font-family: cursive;
  }
`;
