import AppComponent from "@/components/App";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <AppComponent>
      <Box w="full" suppressHydrationWarning>
        <Heading>Home</Heading>
      </Box>
    </AppComponent>
  );
}
