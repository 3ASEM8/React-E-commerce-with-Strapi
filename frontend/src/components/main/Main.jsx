import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../redux/product";

function Main() {
  const theme = useTheme();

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyData(newValue);
    }
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const allCategoriAPI = "products?populate=*";
  const menCategoriAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoriAPI = "products?populate=*&filters[category][$eq]=women";

  const [myData, setmyData] = useState(allCategoriAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  const [clickProduct, setclickProduct] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", py: 11 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    // @ts-ignore
    return (
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h6">{error.message}</Typography>
        <Typography variant="h6">erooooooooooooooooooooooooooooooor</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ mt: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography variant="h6">Selected Product</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allCategoriAPI}
              aria-label="left aligned"
            >
              All Pruduct
            </ToggleButton>

            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={menCategoriAPI}
              aria-label="centered"
            >
              MEN Catigory
            </ToggleButton>

            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={womenCategoriAPI}
              aria-label="right aligned"
            >
              Women catigory
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  "&:hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.2s",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="277"
                  // @ts-ignore
                  image={`${item.attributes.pruductimg.data[0].attributes.url}`}
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" component={"div"}>
                      {item.attributes.productTitle}
                    </Typography>

                    <Typography variant="subtitle1" component={"p"}>
                      ${item.attributes.producPrice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setclickProduct(item);
                      console.log(clickProduct);
                    }}
                    size="small"
                    sx={{ textTransform: "capitalize" }}
                  >
                    <AddShoppingCartOutlined fontSize="small" sx={{ mr: 1 }} />
                    add to cart
                  </Button>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={item.attributes.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails clickProduct={clickProduct} />
        </Dialog>
      </Container>
    );
  }
}

export default Main;
