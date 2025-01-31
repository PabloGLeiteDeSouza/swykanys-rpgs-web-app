import Image from "next/image"
import { auth } from "../auth"
import {Box, Image as ChakraImage, Heading, Text} from "@chakra-ui/react"
 
export default async function UserAvatar() {
  const session = await auth()!
 
  return (
    <Box>
        <Box>
            <Heading>Session Status</Heading>
            <Text>{session?.user?.name}</Text>
        </Box>
      {session && session.user && session.user.image && (
        <ChakraImage w="10" h="10" asChild>
            <Image width={250} height={250} src={`${session?.user?.image}`} alt="User Avatar" />
        </ChakraImage>
      )}
    </Box>
  )
}