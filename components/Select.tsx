import styled from "styled-components";
import { Select as MUISelect, SelectProps } from "@material-ui/core";

const StyledSelect = styled(MUISelect)`
  //   border-radius: 0.25rem;
  .MuiOutlinedInput-input {
    padding: 0.625rem 2rem 0.625rem 0.5rem;
  }
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #e5e5e5;
  }

  &:hover {
    .MuiOutlinedInput-notchedOutline {
      border-color: #e5e5e5;
    }
  }

  &.Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #005fcc;
    }
  }
`;

export const Select = (props: SelectProps) => {
  return <StyledSelect {...props} variant="outlined" />;
};
