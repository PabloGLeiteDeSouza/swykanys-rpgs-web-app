import AppComponent from "@/components/App"
import { Box, Heading } from "@chakra-ui/react"

export default function Personagens() {
    return(
        <AppComponent>
            <Box w="full" suppressHydrationWarning>
                <Heading>Personagens</Heading>
            </Box>
        </AppComponent>
    );
}