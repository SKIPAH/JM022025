import notfound from "../images/notfound.webp";
import { Box, Button, Container, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <SideBar />
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          component="img"
          sx={{
            paddingTop: 2,
          }}
          alt="Not found error 404 logo"
          src={notfound}
        />
        <Typography sx={{ fontWeight: "bold" }}>
          Page not found. Please try again later.
        </Typography>
        <Button
          sx={{ my: 2 }}
          type="button"
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          go home
        </Button>
      </Container>
    </>
  );
}

