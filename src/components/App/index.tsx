import { Box, HStack } from "@chakra-ui/react"
import Sidebar from "../Sidebar"

const AppComponent: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    return (
        <HStack gap={0} w="full" h="vh" suppressHydrationWarning>
            {/* Content */}
            <Sidebar />
            <Box w="full" h="full" suppressHydrationWarning>
                {children}
            </Box>
        </HStack>
    )
}

export default AppComponent;