import { useContext, useState } from "react";
import { ColorModeContext } from "../../Theme";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Facebook,
  Instagram,
  Twitter,
  ExpandMore,
} from "@mui/icons-material";

const options = ["AR", "EN"];

function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#283445",
        px: "4px",
        WebkitBorderBottomRightRadius: 4,
        WebkitBorderBottomLeftRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23f57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
            color="initial"
          >
            HOT
          </Typography>

          <Typography
            sx={{
              flexGrow: 1,
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
            color="initial"
          >
            Free Express Shipping
          </Typography>

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                sx={{ color: "#fff" }}
              >
                <LightModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  ".MuiTypography-root": { fontSize: "10px", color: "#fff" },
                }}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <Twitter sx={{ fontSize: "16px", color: "#fff" }} />
          <Facebook sx={{ fontSize: "16px", mx: 1, color: "#fff" }} />
          <Instagram sx={{ fontSize: "16px", color: "#fff" }} />
        </Stack>
      </Container>
    </Box>
  );
}

export default Header1;
