import React from "react";
import { Card } from "./Card";
import { CardResponse } from "../interfaces/card";
import { getGalleryItems } from "../api/gallery";

export class Gallery extends React.Component {

    constructor(props: {}) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        getGalleryItems().then((data: CardResponse[]) => {
            this.setState({
                items: data
            })
        });
    }

    render() {
        const { items } = this.state as { items: CardResponse[] };
        return (
            <section className="container">
                <h2>Gallery</h2>
                <section className="grid-layout">
                    {
                        items.map((item: CardResponse) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </section>
            </section>
        );
    };
}

