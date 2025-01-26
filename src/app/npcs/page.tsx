import AppComponent from "@/components/App"
import { Box, Heading } from "@chakra-ui/react"

export default function Npcs() {
    return(
        <AppComponent>
            <Box w="full" suppressHydrationWarning>
                <Heading>Npcs</Heading>
            </Box>
        </AppComponent>
    );
}