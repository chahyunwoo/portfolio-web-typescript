import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const AboutTitle = styled(Text)`
  width: 100%;
  margin: 1em 0;
  font-weight: bold;
`;

export const AboutDesc = styled(Text)`
  color: #616161;

  @media (max-width: 768px) {
    br {
      display: none;
    }
  }
`;

export const AboutTitleBorderBottom = styled(AboutTitle)`
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 1.5em;
    height: 0.1em;
    background-color: #ddd;
    bottom: -0.35em;
    left: 0;

    @media (max-width: 991px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
