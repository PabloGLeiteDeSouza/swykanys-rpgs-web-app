import { Box, HStack } from "@chakra-ui/react"
import Sidebar from "../Sidebar"
import Navbar from "../Navbar";
import { Session } from "next-auth";

const AppComponent: React.FC<{ children: React.ReactNode; session: Session | null; }> = ({ children, session }) => {
    
    return (
        <HStack gap={0} w="full" h="vh" suppressHydrationWarning>
            {/* Content */}
            <Sidebar session={session} />
            <Box w="full" h="full" suppressHydrationWarning>
                <Navbar />
                <Box w="full" h="calc(100% - 56px)" overflowY="auto" scrollbarColor="purple.500" p="4" suppressHydrationWarning>
                    {children}
                </Box>
            </Box>
        </HStack>
    )
}

export default AppComponent;