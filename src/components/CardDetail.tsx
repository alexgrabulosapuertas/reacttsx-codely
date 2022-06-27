import React, { ReactElement } from 'react';
import { Card } from './Card';
import { getGalleryItemById } from '../api/gallery';
import { CardResponse } from '../interfaces/card';

export class CardDetail extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            item: {},
        };
    }
    
    componentDidMount(): void {
        const id: number = this.getParamId();
        getGalleryItemById(id).then((data: CardResponse) => {
            this.setState({
                item: {
                    id: data.id,
                    name: data.name,
                    url: data.url,
                },
            });
        });
    }

    render(): ReactElement {
        const { item } = this.state as { item: CardResponse };
        return(
            <div style={{width: '80vw', margin: '0 auto', textAlign: 'center'}}>
                <Card item={item} />
            </div>
        );
    }

    getParamId(): number {
        return +window.location.href.split('/')[3];
    }
}
