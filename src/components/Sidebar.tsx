"use client"
import { Box, Button, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { Avatar } from "./ui/avatar"
import React from "react"
import { FaBars, FaArrowDown, FaGear, FaUser, FaDoorOpen, FaHouse, FaBook, FaQuestion, FaClipboard, FaPeopleRobbery } from "react-icons/fa6"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu"
import { LinkButton } from "./ui/link-button"
import Link from "next/link"
import { GiAngelWings, GiMagicAxe, GiMagicGate, GiThorHammer } from "react-icons/gi"
import { usePathname } from "next/navigation"
import { Tooltip } from "./ui/tooltip"

const Sidebar: React.FC = () => {
    const { open, onToggle} = useDisclosure();
    const path = usePathname();
    return (
        <VStack _dark={{ bgColor: "gray.800" }} _light={{ bgColor: "gray.300" }} px="2" py="1.5" rounded="md" data-open={!open && undefined} _open={{ w: "3/12" }} h="full" justifyContent="space-between" suppressHydrationWarning>
            {/* Content */}
            <VStack w="full" gap="4">
                <Button variant="ghost" w="full" onClick={onToggle}>
                    <FaBars />
                </Button>
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
            <Box w="full">
                <MenuRoot positioning={{ placement: "right-start" }}>
                    <MenuTrigger asChild>
                        <Button variant="plain" w="full">
                            <HStack justifyContent="center" gap="2.5" w="full">
                                <Avatar />
                                {open && (
                                    <>
                                        <Box>
                                            <Text>{"Nome"}</Text>
                                            <Text>{"@usuario"}</Text>
                                        </Box>
                                        <Box>
                                            <FaArrowDown />
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
                            <MenuItem value="sair">
                            <FaDoorOpen />Sair
                        </MenuItem>
                    </MenuContent>
                </MenuRoot>
            </Box>
        </VStack>
    )
}

export default Sidebar;