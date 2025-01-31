"use server";

import { signIn, signOut } from "next-auth/react";

export const loginGoogle = async () => {
    signIn('google', { redirect: true });
}

export const login = async (login: string, password: string) => {
    signIn('credentials', { login, password, redirect: true });
}

export const signout = async () => {
    signOut({ redirect: true });
}