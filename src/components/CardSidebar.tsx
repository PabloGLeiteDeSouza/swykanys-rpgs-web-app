import { Box, HStack, Text } from "@chakra-ui/react"
import { Avatar } from "./ui/avatar"
import { FaArrowDown } from "react-icons/fa6"
import { auth } from "@/auth"

const CardSidebar: React.FC<{ open: boolean }> = async ({ open }) => {
    const session = await auth();
    return (
        <HStack justifyContent="center" gap="2.5" w="full">
            <Avatar src={session?.user?.image ? session.user.image : undefined} />
            {open && (
                <>
                    <Box>
                        <Text>{"Nome"}</Text>
                        <Text>{`@${session?.user?.name}`}</Text>
                    </Box>
                    <Box>
                        <FaArrowDown />
                    </Box>
                </>
            )}
        </HStack>
    )
}

export default CardSidebar;