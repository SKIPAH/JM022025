import SideBar from "../components/SideBar";
import { Container, Typography, Box } from "@mui/material";

import ModalWindow from "../components/ModalWindow";
import ChartFromData from "../components/ChartFromData";

export default function MainPage() {
  const showChart = () => {
    console.log("Show chart");
  };

  const handleAddChart = (chartName: string) => {
    console.log(chartName);
  };

  return (
    //<ChartFromData />
    <>
      <SideBar />
      <Container>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            No Charts created yet
          </Typography>
          <ModalWindow onAddChart={handleAddChart}></ModalWindow>
        </Box>
        <ChartFromData />
      </Container>
    </>
  );
}
