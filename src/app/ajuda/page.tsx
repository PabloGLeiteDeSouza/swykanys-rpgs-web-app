import AppComponent from "@/components/App"
import { Box, Heading } from "@chakra-ui/react"

export default function Ajuda() {
    return(
        <AppComponent>
            <Box w="full" suppressHydrationWarning>
                <Heading>Ajuda</Heading>
            </Box>
        </AppComponent>
    );
}