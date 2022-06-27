import { CardResponse } from "../interfaces/card";

export async function getGalleryItems(): Promise<CardResponse[]> {
    const data = await fetch(`https://rickandmortyapi.com/api/character/`);
    return await (await data.json()).results;
}

export async function getGalleryItemById(id: number): Promise<CardResponse> {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await data.json();
}
