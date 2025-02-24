import SideBar from "../components/SideBar";
import { Container, Typography, Box } from "@mui/material";
import ModalWindow from "../components/ModalWindow";
import { useState } from "react";
import ChartFromDataSelected from "../components/ChartFromDataSelected";

export default function MainPage() {
  const [showChart, setShowChart] = useState(false);

  const handleAddChart = (chartName: string) => {
    console.log(chartName);
    setShowChart(true);
  };

  return (
    <>
      <SideBar />
      <Container>
        {!showChart ? (
          <>
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

              <ModalWindow onAddChart={handleAddChart} />
            </Box>
          </>
        ) : (
          <ChartFromDataSelected />
        )}
      </Container>
    </>
  );
}
