"use client"
import { Box, Heading } from "@chakra-ui/react"
import { Session } from "next-auth"
import React from "react"
import { Skeleton } from "./ui/skeleton"

const ContentHomePage: React.FC<{ session: Session | null }> = ({ session }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState({})
    
    const StartComponent = React.useCallback(async () => {
        const res = await fetch(`/api/user/${session?.user?.id}`);
        const user = await res.json();
        setUser(user);
        setIsLoading(false)
    }, [session])

    React.useEffect(() => {
        StartComponent();
    }, [StartComponent])
    
    return (
        <Skeleton loading={isLoading}>
            {user.role === "admin" ? (
                <Box>
                    <Heading as="h1" size="lg">Admin Dashboard</Heading>
                </Box>
            ) : (
                <Box>
                    <Heading>Você gosta de</Heading>
                </Box>
            )}
        </Skeleton>
    )
}

export default ContentHomePage;