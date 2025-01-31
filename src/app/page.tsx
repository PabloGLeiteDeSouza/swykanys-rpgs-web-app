import { auth } from "@/auth";
import AppComponent from "@/components/App";
import ContentHomePage from "@/components/ContentHomePage";
import { Box, Heading } from "@chakra-ui/react";

export default async function Home() {
  const session = await auth();
  return (
    <AppComponent >
      <Box w="full" suppressHydrationWarning>
        <Heading>Boas vindas {session?.user?.name}</Heading>
        <Box>
          <ContentHomePage session={session}/>
        </Box>
      </Box>
    </AppComponent>
  );
}
