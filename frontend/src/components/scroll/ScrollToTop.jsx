import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        size="small"
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
