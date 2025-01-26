import AppComponent from "@/components/App"
import { Box, Heading } from "@chakra-ui/react"

export default function Fichas() {
    return(
        <AppComponent>
            <Box w="full" suppressHydrationWarning>
                <Heading>Fichas</Heading>
            </Box>
        </AppComponent>
    );
}