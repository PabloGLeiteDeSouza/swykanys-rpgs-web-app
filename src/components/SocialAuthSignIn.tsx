
import { Heading, HStack, VStack } from "@chakra-ui/react"
import SignInGoogleButton from "./SignInGoogle";

const SocialAuthSignIn: React.FC = () => {
    return (
        <VStack suppressHydrationWarning>
            <HStack>
                <Heading>Escolha como fazer login:</Heading>
            </HStack>
            <SignInGoogleButton />
        </VStack>
    )
}
export default SocialAuthSignIn;