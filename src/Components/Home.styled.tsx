import styled from "styled-components";
import tw from "twin.macro";

export const StyledHome = styled.div`
  ${tw`flex justify-between p-4`}

  .text-zone {
    ${tw`p-4 w-2/4`};
    word-spacing: 12px;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    font-family: "Coolvetica";

    &::before {
      color: rgb(34, 81, 133);
      content: "<h1>";
      font-size: 18px;
      font-weight: bold;
      opacity: 0.6;
      position: absolute;
      margin-top: -20px;
    }

    &::after {
      content: "</h1>";
      font-size: 18px;
      font-weight: bold;
      position: absolute;
      opacity: 0.6;
      color: rgb(34, 81, 133);
    }
  }

  h2 {
    color: #8d8d8d;
    margin-top: 15px;
    font-weight: 400;
    font-size: 11px;
    font-family: sans-serif;
    letter-spacing: 3px;
  }

  .name {
    ${tw`flex gap-x-1`}
  }

  span {
    ${tw`pt-4`}
  }

  .flat-button {
    color: #ffd700;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 4px;
    font-family: sans-serif;
    text-decoration: none;
    border: 1px solid #ffd700;
    float: right;
    margin-top: 20px;
    padding: 8px 10px;

    &:hover {
      background-color: #30639c;
      color: #fff;
      border: 1px solid #fff;
    }
  }
  .image {
    ${tw`p-4 w-[190px] lg:(w-[350px]) md:(w-[300px])`}
  }
`;
