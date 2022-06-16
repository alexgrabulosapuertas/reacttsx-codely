export function fadeIn(element: HTMLElement ) {
    element.style.opacity = '0';

    let last = +new Date();
    const tick = () => {
        element.style.opacity = String(+element.style.opacity + (+new Date() - last) / 1000);
        last = +new Date();

        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame! && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}