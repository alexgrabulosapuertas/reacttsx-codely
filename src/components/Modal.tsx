import { ReactElement } from "react";

export function Modal(props: { title: string, body: ReactElement, close: () => void }) {

    return (
        <article style={{...styles.modal,  position: 'fixed' }}>
            <div style={{margin: '2rem'}}>
                <h3>{ props.title }</h3>
                <button style={{ position: 'absolute', top: 0, right: 0}} onClick={props.close}>Close</button>
                {props.body}
            </div>
        </article>
    );
    
}

const styles = {
    modal: {
        background: '#0E2C40',
        height: '80vh',
        width: '80vw',
        top: '50vh',
        left: '50vw',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 0px 5px 2px',
    },
};
