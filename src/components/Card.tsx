import { CardResponse } from "../interfaces/card";

export function Card({ item }: { item: CardResponse }) {
    return (
        <article className="card">
            <h3>{item.name}</h3>
            <img className="card__img" src={item.url} alt={item.name} />
        </article>
    )
}