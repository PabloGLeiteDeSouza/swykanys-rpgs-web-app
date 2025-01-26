import AppComponent from "@/components/App"
import { Box, Heading } from "@chakra-ui/react"

export default function Historias() {
    return(
        <AppComponent>
            <Box w="full" suppressHydrationWarning>
                <Heading>Histórias</Heading>
            </Box>
        </AppComponent>
    );
}