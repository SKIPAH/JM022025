import { Container, Typography, Box } from "@mui/material";

export default function TestMaterialUI() {
  return (
    <Container
      sx={{
        bgcolor: "tomato",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">Hello world</Typography>
      <Box
        sx={{ width: { xs: 1, md: 200 }, height: 200, bgcolor: "red" }}
      ></Box>
    </Container>
  );
}
