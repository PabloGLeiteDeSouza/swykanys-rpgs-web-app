import AppComponent from "@/components/App"
import { Box, Heading } from "@chakra-ui/react"

export default function Rpgs() {
    return(
        <AppComponent>
            <Box w="full" suppressHydrationWarning>
                <Heading>Rpgs</Heading>
            </Box>
        </AppComponent>
    );
}