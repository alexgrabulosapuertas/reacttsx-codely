import React from "react";
import { Card } from "./Card";
import { CardResponse } from "../interfaces/card";
import { getGalleryItems } from "../api/gallery";
import { Modal } from "./Modal";

export class Gallery extends React.Component {

    constructor(props: {}) {
        super(props);
        this.state = {
            items: [],
            openModal: false,
        };
    }

    componentDidMount() {
        getGalleryItems().then((data: CardResponse[]) => {
            this.setState({
                items: data,
            })
        });
    }

    render() {
        const { items } = this.state as { items: CardResponse[] };
        const { openModal } = this.state as { openModal: boolean };
        return (
            <section className="container">
                <h2>Gallery</h2>
                <button onClick={this.openModalForm} >Add item</button>
                <section className="grid-layout">
                    {
                        items.map((item: CardResponse) => (
                            <Card key={item.id} item={item} enabledFooter />
                        ))
                    }
                </section>
                {
                    openModal &&
                    <Modal 
                        title="New Item"
                        close={this.closeModalForm}
                    >
                        <form onSubmit={this.addItem} style={{display: 'flex', flexDirection: 'column'}}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <label htmlFor="url">Url</label>
                            <input type="text" name="url" id="url" placeholder="Image URL" />
                            <button>Add</button>
                        </form>
                    </Modal>
                }
            </section>
        );
    };

    openModalForm = () => {
        this.setState({
            openModal: true,
        });
    }

    closeModalForm = () => {
        this.setState({
            openModal: false
        });
    }

    addItem = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const { name, url } = e.target as unknown as { name: { value: string }, url: { value: string } };
        const { items } = this.state as { items: CardResponse[] };
        let key = 1;
        for(let item of items) {
            if (item.id === key) key++;
            else break;
        }
        const newCard: CardResponse = {
            id: key,
            name: name.value,
            url: url.value,
        };
        this.setState({
            items: [...items, newCard]
        });
        name.value = '';
        url.value = '';
    }
}

