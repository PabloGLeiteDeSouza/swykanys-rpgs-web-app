"use client"
import { HStack, Input, Kbd } from "@chakra-ui/react"
import { ColorModeButton } from "./ui/color-mode";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";

const Navbar: React.FC = () => {
     return (
        <HStack _dark={{ bgColor: "gray.800" }} _light={{ bgColor: "gray.300" }} px="4" py="2" w="full" justifyContent="flex-end">
            <HStack>
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