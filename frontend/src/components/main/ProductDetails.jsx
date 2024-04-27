/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

function ProductDetails({ clickProduct }) {
  const [selectedImg, setselectedImg] = useState(0);

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
        <img
          width={400}
          src={
            clickProduct.attributes.pruductimg.data[selectedImg].attributes.url
          }
          alt=""
        />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {clickProduct.attributes.productTitle}
        </Typography>
        <Typography fontSize={"22px"} color="crimson" my={0.4}>
          {clickProduct.attributes.producPrice}
        </Typography>
        <Typography variant="body1">
          {clickProduct.attributes.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickProduct.attributes.pruductimg.data.map((item, idx) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={idx}
                  aria-label="left aligned"
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: 0,
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => setselectedImg(idx)}
                    style={{ borderRadius: 3 }}
                    width={"100%"}
                    height={"100%"}
                    src={item.attributes.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
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
