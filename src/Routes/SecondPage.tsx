import { Box, Button, Container, Paper, Typography } from "@mui/material";

//learning MaterialUI
const serviceList = ["Service 1", "Service 2", "Service 3"];

export default function SecondPage() {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        Services
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "between",
          gap: 4,
        }}
      >
        {serviceList.map((service) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ mt: 2 }}>Some text here</Typography>
              <Button variant="outlined" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
