import { Container, Grid, GridItem, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Sidebar from "../componets/Sidebar";

export default function RootLayout() {
  return (
    <Box>
      {" "}
      <Navbar />
      <Container maxW="6xl" pb="20px">
        <Grid templateColumns="repeat(6,1fr)" marginTop={"90px"}>
          <GridItem
            as="aside"
            p={{ base: "10px" }}
            colSpan={{ base: 6, md: 2, lg: 1 }}
          >
            <Sidebar />
          </GridItem>
          <GridItem as="aside" colSpan={5}>
            <Outlet />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
