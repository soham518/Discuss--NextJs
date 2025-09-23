"use server";
import * as auth from "@/auth";

export const signIn = async (provider?: string) => {
  return auth.signIn(provider);
}