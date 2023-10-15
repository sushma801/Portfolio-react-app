import styled from "styled-components";
import tw from "twin.macro";

export const StyledHeader = styled.div`
  ${tw`flex justify-between p-4 bg-primary text-white `}

  .header-icon {
    font-size: 1.5rem;
    color: #fff;
  }

  a {
    ${tw`text-base no-underline`}
  }

  a.active {
    ${tw`font-bold`}
  }

  .rightTab {
    ${tw`flex flex-row w-2/5 justify-between`}
  }
`;
