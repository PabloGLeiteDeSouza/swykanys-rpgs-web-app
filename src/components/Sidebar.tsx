"use client"
import { Box, Button, HStack, Text, useDisclosure, VStack, Image as ChakraImage, Link as ChakraLink, Heading, SelectTrigger, createListCollection } from "@chakra-ui/react"
import { Avatar } from "./ui/avatar"
import React from "react"
import { FaBars, FaGear, FaUser, FaDoorOpen, FaHouse, FaBook, FaQuestion, FaClipboard, FaPeopleRobbery, FaArrowRight } from "react-icons/fa6"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu"
import Link from "next/link"
import { GiAngelWings, GiMagicAxe, GiMagicGate, GiThorHammer } from "react-icons/gi"
import { usePathname } from "next/navigation"
import { Tooltip } from "./ui/tooltip"
import Image from "next/image"
import { LinkButton } from "./ui/link-button"
import { Session } from "next-auth"
import { Status } from "./ui/status"
import { HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger } from "./ui/hover-card"
import { SelectContent, SelectItem, SelectRoot, SelectValueText } from "./ui/select"
import { signOut } from "next-auth/react"
import abreviarNome from "@/utils/abreviar-nome"

const Sidebar: React.FC<{ session: Session | null }> = ({ session }) => {
    const { open, onToggle} = useDisclosure();
    const path = usePathname();
    const status_user = createListCollection({
        items: [
            { label: "Online", value: "online" },
            { label: "Offline", value: "offline" },
            { label: "Ausenete", value: "ausente" },
            { label: "Ocupado", value: "ocupado" },
        ]
    })
    return (
        <VStack xlDown={{ display: "none", visibility: "hidden" }} _dark={{ bgColor: "gray.800" }} _light={{ bgColor: "gray.300" }} px="2" py="2" rounded="md" data-open={!open && undefined} _open={{ w: "3/12" }} h="full" justifyContent="space-between" suppressHydrationWarning>
            {/* Content */}
            <VStack w="full" gap="4">
                <Button variant="ghost" w="full" onClick={onToggle}>
                    <FaBars />
                </Button>
                <ChakraLink textDecor="none" data-open={!open && undefined} _open={{ display: "flex", flexDir: "row", gap: "2" }} asChild>
                    <Link href="/">
                        <ChakraImage data-open={!open && undefined} _open={{ w: "10", h: "10" }} w="15" h="15" rounded="full" asChild>
                            <Image width={50} height={50} src="/swykanys-rpgs.webp" alt="swykanys-rpgs" />
                        </ChakraImage>
                        {open && (
                            <Heading>
                                Swykanys RPGS
                            </Heading>
                        )}
                    </Link>
                </ChakraLink>
                <VStack w="full" gap="4">
                    <Tooltip content="Home" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/">
                                <FaHouse /> {open && "Home"}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                    <Tooltip content="Rpgs" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/rpgs" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/rpgs">
                                <GiMagicAxe /> {open && "RPGs"}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                    <Tooltip content="Personagens" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/personagens" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/personagens">
                                <GiAngelWings /> {open && "Personagens"}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                    <Tooltip content="Npcs" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/npcs" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/npcs">
                                <FaPeopleRobbery /> {open && `NPC's`}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                    <Tooltip content="Classes" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/classes" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/classes">
                                <GiThorHammer /> {open && "Classes"}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                    <Tooltip content="Fichas" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/fichas" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/fichas">
                                <FaClipboard /> {open && "Fichas"}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                    <Tooltip content="Livros" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/livros" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/livros">
                                <FaBook /> {open && "Livros"}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                    <Tooltip content="Historias" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/historias" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/historias">
                                <GiMagicGate /> {open && "Histórias"}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                    <Tooltip content="Ajuda" positioning={{ placement: "top" }}>
                        <LinkButton data-active={path !== "/ajuda" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                            <Link href="/ajuda">
                                <FaQuestion /> {open && "Ajuda"}
                            </Link>
                        </LinkButton>
                    </Tooltip>
                </VStack>
            </VStack>
            <Box xlTo2xl={{ h: "12" }} w="full">
                <MenuRoot positioning={{ placement: "right-start" }}>
                    <MenuTrigger asChild>
                        <Button variant="plain" w="full">
                            <HStack xlDown={{ alignItems: "center", justifyContent: "space-between"}} justifyContent="center" gap="10" w="full">
                                <Avatar src={session?.user?.image ? session.user.image : undefined} />
                                {open && (
                                    <>
                                        <Box xlDown={{ w: "1/2", overflow: "hidden", whiteSpace: "normal", wordBreak: "break-word", display: "flex", flexDirection: "column", gap: "1.5" }} >
                                            <Text textAlign="start" w="100%" overflowWrap="break-word" wordBreak="break-word" whiteSpace="normal">{session?.user?.name ? abreviarNome(session.user.name) : ""}</Text>
                                            <HoverCardRoot size="sm" positioning={{ placement: "top" }}>
                                                <HoverCardTrigger asChild>
                                                    <Status value="success">
                                                        Online
                                                    </Status>
                                                </HoverCardTrigger>
                                                <HoverCardContent w="96">
                                                    <HoverCardArrow />
                                                    <SelectRoot collection={status_user}>
                                                        <SelectTrigger>
                                                            <SelectValueText />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {status_user.items.map((status) => (
                                                                <SelectItem key={status.value} item={status} >
                                                                    {status.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </SelectRoot>
                                                </HoverCardContent>
                                            </HoverCardRoot>                    
                                        </Box>
                                        <Box>
                                            <FaArrowRight />
                                        </Box>
                                    </>
                                )}
                            </HStack>
                        </Button>
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem value="perfil">
                            <FaUser />Perfil
                            </MenuItem>
                            <MenuItem value="configuracoes">
                            <FaGear />Configurações
                            </MenuItem> 
                            <MenuItem onClick={async () => {
                                await signOut();
                            }} value="sair">
                            <FaDoorOpen />Sair
                        </MenuItem>
                    </MenuContent>
                </MenuRoot>
            </Box>
        </VStack>
    )
}

export default Sidebar;