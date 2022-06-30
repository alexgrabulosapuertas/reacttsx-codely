import { CSSProperties, ReactElement } from "react";

export function Modal(props: { title: string, close: () => void, children: ReactElement }) {

    return (
        <article style={styles.modal}>
            <div style={{margin: '2rem'}}>
                <h3>{ props.title }</h3>
                <button style={styles.closeButton} onClick={props.close}>Close</button>
                {props.children}
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
        position: 'fixed',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 0px 5px 2px',
    } as CSSProperties,
    closeButton: {
        position: 'absolute' as 'absolute',
        top: 0,
        right: 0,
    },
};
