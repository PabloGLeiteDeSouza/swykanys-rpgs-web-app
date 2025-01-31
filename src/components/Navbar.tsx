"use client"
import { Button, HStack, Input, Kbd, Image as ChakraImage, Link as ChakraLink, VStack, createListCollection } from "@chakra-ui/react"
import { ColorModeButton } from "./ui/color-mode";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { DrawerActionTrigger, DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { FaBars, FaBook, FaClipboard, FaHouse, FaPeopleRobbery, FaQuestion } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "./ui/tooltip";
import { LinkButton } from "./ui/link-button";
import { GiAngelWings, GiMagicAxe, GiMagicGate, GiThorHammer } from "react-icons/gi";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const path = usePathname();
    const status_user = createListCollection({
        items: [
            { label: "Online", value: "online" },
            { label: "Offline", value: "offline" },
            { label: "Ausenete", value: "ausente" },
            { label: "Ocupado", value: "ocupado" },
        ]
    });
    return (
        <HStack _dark={{ bgColor: "gray.800" }} _light={{ bgColor: "gray.300" }} px="4" py="2" w="full" justifyContent="space-between" xl={{ justifyContent: "flex-end" }}>
                <DrawerRoot placement="start">
                    <DrawerBackdrop />
                    <DrawerTrigger xl={{ display: "none", visibility: "hidden" }} asChild>
                        <Button variant="outline" size="sm">
                            <FaBars />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                    <DrawerHeader>
                        <ChakraLink textDecor="none" asChild>
                            <Link href="/">
                                <ChakraImage w="15" h="15" rounded="full" asChild>
                                    <Image width={50} height={50} src="/swykanys-rpgs.webp" alt="swykanys-rpgs" />
                                </ChakraImage>
                                <DrawerTitle>{`Swykanys RPG'S`}</DrawerTitle>
                            </Link>
                        </ChakraLink>
                    </DrawerHeader>
                        <DrawerBody>
                            <VStack w="full" gap="4">
                                <Tooltip content="Home" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/">
                                            <FaHouse /> Home
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                                <Tooltip content="Rpgs" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/rpgs" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/rpgs">
                                            <GiMagicAxe /> RPGS
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                                <Tooltip content="Personagens" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/personagens" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/personagens">
                                            <GiAngelWings /> Personagens
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                                <Tooltip content="Npcs" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/npcs" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/npcs">
                                            <FaPeopleRobbery /> {`NPC's`}
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                                <Tooltip content="Classes" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/classes" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/classes">
                                            <GiThorHammer /> Classes
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                                <Tooltip content="Fichas" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/fichas" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/fichas">
                                            <FaClipboard /> Fichas
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                                <Tooltip content="Livros" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/livros" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/livros">
                                            <FaBook /> Livros
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                                <Tooltip content="Historias" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/historias" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/historias">
                                            <GiMagicGate /> Histórias
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                                <Tooltip content="Ajuda" positioning={{ placement: "top" }}>
                                    <LinkButton data-active={path !== "/ajuda" && undefined} _active={{ _light: { bgColor: "gray.100" }, _dark: { bgColor: "gray.900" } }} w="full" variant="ghost" asChild>
                                        <Link href="/ajuda">
                                            <FaQuestion /> Ajuda
                                        </Link>
                                    </LinkButton>
                                </Tooltip>
                            </VStack>
                        </DrawerBody>
                        <DrawerFooter>
                            <DrawerActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                            </DrawerActionTrigger>
                            <Button>Save</Button>
                        </DrawerFooter>
                        <DrawerCloseTrigger />
                    </DrawerContent>
                </DrawerRoot>
                <HStack gap="5">
                    <InputGroup
                        flex="1"
                        startElement={<LuSearch />}
                        endElement={<Kbd>⌘K</Kbd>}
                    >
                        <Input placeholder="Pesquise..." />
                    </InputGroup>
                    <ColorModeButton />
                </HStack>
        </HStack>
     )
}

export default Navbar;