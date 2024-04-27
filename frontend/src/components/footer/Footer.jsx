import { Box, Button, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Container>
        <Typography
          justifyContent={"center"}
          variant="h6"
          color="HighlightText"
          display={"flex"}
          alignItems={"center"}
          sx={{ fontSize: 18 }}
        >
          Desigend and developed by
          <Button
            sx={{
              mx: 0.5,
              fontSize: "18px",
              textTransform: "capitalize",
              color: "#ff7790",
            }}
            variant="text"
            color="primary"
          >
            Assem Mohemed
          </Button>
          © 2023
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
