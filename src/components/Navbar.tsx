export function Navbar() {
    return(
        <nav style={styles.navbar}>
            <ul style={styles.menu}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        background: '#676767',
        padding: '1rem',
        top: '0',
        zIndex: 1,
        position: 'sticky' as 'sticky',
        textAlign: 'center' as 'center',
    },
    menu: {
        width: '50vw',
        display: 'inline-flex',
        justifyContent: 'space-evenly',
        listStyle: 'none',
    },
};