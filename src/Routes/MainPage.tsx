import SideBar from "../components/SideBar";
import { Container } from "@mui/material";
import ChartFromData from "../components/ChartFromData";

export default function MainPage() {
  return (
    <>
      <SideBar />
      <Container>
        <ChartFromData />
      </Container>
    </>
  );
}
