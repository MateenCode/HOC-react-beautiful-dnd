import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const Container = styled("div")`
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
  background-color: #ecf1f4;
  margin: 5px 0px;
  cursor: pointer;
`;

export const Main = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const Text = styled("p")`
  font-weight: 500;
  font-size: 21px;
  line-height: 18px;
`;

export const DropDown = styled("div")`
  background-color: #f8f8f8;
  padding: 10px 20px;
`;

export const StyledButton = styled(Button)`
  min-width: 126;
  background-color: #f4f4f4;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: black;
  font-weight: 400;
  padding: 0px 20px;
  &:hover {
    opacity: 0.8;
  }
`;

export const DropDownText = styled("p")`
  color: #585757;
  letter-spacing: 1px;
  font-size: 12px;
`;

