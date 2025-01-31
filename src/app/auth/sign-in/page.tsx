import FormAuthSignIn from "@/components/FormAuthSignIn";
import SocialAuthSignIn from "@/components/SocialAuthSignIn";
import { Box } from "@chakra-ui/react";

export default function SignIn() {
    return (
        <Box suppressHydrationWarning h="vh" w="full" lg={{ display: "flex", justifyContent: "center", alignItems: "center"  }}>
            <Box lg={{ display: "flex", flexDir: "row", gap: "2.5" }}>
                <Box>
                    <FormAuthSignIn />
                </Box>
                <Box>
                    <SocialAuthSignIn />
                </Box>
            </Box>
        </Box>
    )
}