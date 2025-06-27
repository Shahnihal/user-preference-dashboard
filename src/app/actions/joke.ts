"use server";

import { revalidatePath } from "next/cache";

export async function getJokeViaServerAction() {
    // const res = await fetch("https://icanhazdadjoke.com/", {
    //     headers: { Accept: "application/json" },
    //     cache: "no-store",
    // });
    // return res.json();

    // (await cookies())?.get("test_key")

    revalidatePath("/")
}