import { CardResponse } from "../interfaces/card";

export function Card({ item, enabledFooter }: { item: CardResponse, enabledFooter?: boolean }) {
    return (
        <article className="card">
            <h3>{item.name}</h3>
            <img className="card__img" src={item.url} alt={item.name} />
            {
                 enabledFooter && CardFooter(item.id)
            }
        </article>
    );
}

function CardFooter(itemId: number) {
    return (
        <footer>
            <a href={"/"+itemId}>View More</a>
        </footer>
    );
}