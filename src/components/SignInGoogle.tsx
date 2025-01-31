import { signIn } from "@/auth"
import { Button } from "@chakra-ui/react"
import { FaGoogle } from "react-icons/fa6"

const SignInGoogleButton: React.FC = () => {
    return (
        <Button onClick={async () => {
            "use server";
            await signIn("google");
        }}>
            <FaGoogle />
            Sign in with Google
        </Button>
    )
}

export default SignInGoogleButton;