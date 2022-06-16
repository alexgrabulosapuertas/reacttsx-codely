import { fadeIn } from '../assets/ts/animations';

export function About() {
    return(
        <section>
            <h2>About</h2>
            <p ref={element => fadeIn(element!)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis vero voluptatibus dolorem omnis eos in harum. Ipsam illum pariatur, obcaecati quisquam ex minima doloribus ad omnis ullam repellendus voluptates!
            </p>
        </section>
    );
}