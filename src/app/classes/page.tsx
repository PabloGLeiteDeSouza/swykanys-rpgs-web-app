import AppComponent from "@/components/App"
import { Box, Heading } from "@chakra-ui/react"

export default function Classes() {
    return(
        <AppComponent>
            <Box w="full" suppressHydrationWarning>
                <Heading>Classes</Heading>
                
            </Box>
        </AppComponent>
    );
}