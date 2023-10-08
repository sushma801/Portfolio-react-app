import styled from "styled-components";
import tw from "twin.macro";

export const StyledAbout = styled.div`
  ${tw`flex p-4 justify-between`}

  .about-container {
    ${tw`flex flex-col gap-y-2 w-[70%]`}
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

  .work-demo {
    ${tw`flex flex-col p-4`}
  }

  .skills-container {
    ${tw`flex flex-wrap`}

    > div {
      ${tw`p-4 w-[250px]`}
    }
  }

  .icon-set {
    ${tw`flex items-center`}
  }

  .web-sites {
    ${tw`ml-2 text-cyan-800 underline font-bold`}
  }

  .container {
    ${tw`p-4`}
  }

  .describtion {
    font-family: emoji;
    word-wrap: break-word;
    word-spacing: 8px;
  }

  .image {
    padding: 1rem;
    height: 350px;
  }
`;
