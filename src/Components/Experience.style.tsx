import styled from "styled-components";
import tw from "twin.macro";

export const StyledExperience = styled.div`
  ${tw` p-4 `}

  .work-container {
    ${tw`px-4`}
  }

  .describtion {
    font-family: cursive;
    word-wrap: break-word;
    word-spacing: 8px;
  }

  .container {
    gap: 8px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #155e75;
    padding: 12px 0;
  }
`;
