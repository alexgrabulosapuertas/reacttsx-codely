import { CardResponse } from "../interfaces/card";

export function Card({ item, enabledFooter }: { item: CardResponse, enabledFooter?: boolean }) {
    return (
        <article style={styles.card}>
            <h3>{item.name}</h3>
            <img style={styles.cardImage} src={item.url} alt={item.name} />
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

const styles = {
    card: {
        border: '1px solid #212121',
        padding: '1rem 0',
    },
    cardImage: {
        width: '90%',
    },
};
