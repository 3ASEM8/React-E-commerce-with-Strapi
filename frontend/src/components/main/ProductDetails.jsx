import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box display={"flex"}>
        <img width={400} src="public\images\banner-16.jpg" alt="" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMENs FASHION</Typography>
        <Typography fontSize={"22px"} color="crimson" my={0.4}>
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          consequatur, velit, temporibus repudiandae placeat illo debitis id
          similique facilis iste ducimus maiores assumenda dolore porro minus ut
          molestias soluta repellat!
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["public/images/banner-16.jpg", "public/images/banner-17.jpg"].map(
            (item) => {
              return (
                <img
                  style={{ borderRadius: 3 }}
                  width={90}
                  key={item}
                  src={item}
                  alt=""
                />
              );
            }
          )}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
