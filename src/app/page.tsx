import { auth } from "@/auth";
import AppComponent from "@/components/App";
import { Box, Heading } from "@chakra-ui/react";

export default async function Home() {
  const session = await auth();
  return (
    <AppComponent session={session}>
      <Box w="full" suppressHydrationWarning>
        <Heading>Home</Heading>
      </Box>
    </AppComponent>
  );
}
