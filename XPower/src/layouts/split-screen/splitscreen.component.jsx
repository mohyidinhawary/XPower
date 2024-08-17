import { Box, Container } from "@mui/material";
import SideBar from "../../layouts/sidebar/sidebar.component";
import StickyFooter from "../../layouts/footer/footer.component";
export default function SplitScreen({ children }) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,

            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="xs">{children}</Container>
        </Box>
      </Box>
      <StickyFooter />
    </>
  );
}
