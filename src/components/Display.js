import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";

export default Display() {
  return (
    <>
      <NumberDisplay>
      
      </NumberDisplay>
    </>
    );
}
    
const NumberDisplay = styled.div`
  grid-area: 1 / 1 / 1 / 5;
  background: ${colors.dark};
  box-shadow: inset 0 -3px 0 ${colors.darkAccent};
`;