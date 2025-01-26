"use client"
import { Box, Button, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { Avatar } from "./ui/avatar"
import React from "react"
import { FaBars, FaArrowDown, FaGear, FaUser, FaDoorOpen, FaHouse, FaBook, FaQuestion, FaClipboard, FaPeopleRobbery } from "react-icons/fa6"
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu"
import { LinkButton } from "./ui/link-button"
import Link from "next/link"
import { GiAngelWings, GiMagicAxe, GiMagicGate, GiThorHammer } from "react-icons/gi"

const Sidebar: React.FC = () => {
    const { open, onToggle} = useDisclosure();
    return (
        <VStack px="2" py="1.5" rounded="md" data-open={!open && undefined} _open={{ w: "3/12" }} h="full" justifyContent="space-between" suppressHydrationWarning>
            {/* Content */}
            <VStack w="full" gap="4">
                <Button variant="ghost" w="full" onClick={onToggle}>
                    <FaBars />
                </Button>
                <VStack w="full" gap="4">
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/">
                            <FaHouse /> {open && "Home"}
                        </Link>
                    </LinkButton>
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/rpg">
                            <GiMagicAxe /> {open && "RPGs"}
                        </Link>
                    </LinkButton>
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/personagens">
                            <GiAngelWings /> {open && "Personagens"}
                        </Link>
                    </LinkButton>
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/npcs">
                            <FaPeopleRobbery /> {open && `NPC's`}
                        </Link>
                    </LinkButton>
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/classes">
                            <GiThorHammer /> {open && "Classes"}
                        </Link>
                    </LinkButton>
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/fichas">
                            <FaClipboard /> {open && "Fichas"}
                        </Link>
                    </LinkButton>
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/livros">
                            <FaBook /> {open && "Livros"}
                        </Link>
                    </LinkButton>
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/historias">
                            <GiMagicGate /> {open && "Histórias"}
                        </Link>
                    </LinkButton>
                    <LinkButton w="full" variant="ghost" asChild>
                        <Link href="/ajuda">
                            <FaQuestion /> {open && "Ajuda"}
                        </Link>
                    </LinkButton>
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