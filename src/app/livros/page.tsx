import AppComponent from "@/components/App"
import { Box, Heading } from "@chakra-ui/react"

export default function Livros() {
    return(
        <AppComponent>
            <Box w="full" suppressHydrationWarning>
                <Heading>Livros</Heading>
            </Box>
        </AppComponent>
    );
}