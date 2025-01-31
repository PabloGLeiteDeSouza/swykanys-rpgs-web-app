"use client"
import { Box, Button, HStack, Input, VStack } from "@chakra-ui/react"
import { Formik } from "formik"
import { signIn } from "next-auth/react"
import { Field } from "./ui/field"
import { PasswordInput, PasswordStrengthMeter } from "./ui/password-input"

const FormAuthSignIn: React.FC = () => {
    return (
        <Box suppressHydrationWarning>
            <Formik
                initialValues={{
                    login: "",
                    password: "",
                }}
                onSubmit={async ({ login, password }) => {
                    signIn('credentials', { login, password });
                }}
            >
                {({handleChange, handleSubmit, values, errors}) => {
                    return (
                        <VStack gap="2.5" asChild>
                            <form onSubmit={handleSubmit}>
                                <Field label="Login" helperText="informe seu email ou usuario" invalid={!errors.login && undefined} errorText={errors.login}>
                                    <Input onChange={handleChange('login')} value={values.login} type="text" />
                                </Field>
                            
                                <Field label="senha" helperText="informe sua senha" invalid={!errors.password && undefined} errorText={errors.password}>
                                    <PasswordInput  />
                                    <PasswordStrengthMeter value={1} />
                                </Field>
                            
                                <HStack justifyContent="center">
                                    <Button w="36" type="submit">Entrar</Button>
                                </HStack>
                            </form>
                        </VStack>
                    )
                }}
            </Formik>
        </Box>
    )
}

export default FormAuthSignIn;