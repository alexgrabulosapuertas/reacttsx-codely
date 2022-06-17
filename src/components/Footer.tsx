import React from 'react';

export function Footer() {
    return (
        <footer id='footer' style={styles.footerContainer}>
            <p>Created by: Àlex</p>
        </footer>
    );
}

const styles = {
    footerContainer: {
        backgroundColor: '#1f2a3f',
        height: '10vh',
    }
};