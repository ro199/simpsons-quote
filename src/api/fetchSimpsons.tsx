import type { Character } from "~/types/types";

export async function fetchSimpsons(): Promise<Character[]> {
    const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=9";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error fetching simpsons");
    }

    const results = await response.json();
    return results;
}