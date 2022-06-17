export function Navbar() {
    return(
        <nav style={{ textAlign: 'center', padding: '1rem' }}>
            <ul style={styles.menu}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    menu: {
        width: '50vw',
        display: 'inline-flex',
        justifyContent: 'space-evenly',
        listStyle: 'none',
    },
};