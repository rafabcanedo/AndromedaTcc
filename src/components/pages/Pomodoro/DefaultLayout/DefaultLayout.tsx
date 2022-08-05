import { Outlet } from "react-router-dom";
import HeaderPomodoro from "../HeaderPomodoro/HeaderPomodoro";

import { LayoutContainer } from "./styles";

export function DefaultLayout() {
 return(
  <LayoutContainer>
    <HeaderPomodoro />
    <Outlet />
  </LayoutContainer>
 );
}