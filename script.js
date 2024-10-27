document.querySelectorAll('.collage-item img').forEach((img) => {
    img.addEventListener('mousemove', (e) => {
        const { offsetWidth, offsetHeight } = img;
        const { clientX, clientY } = e;
        const { left, top } = img.getBoundingClientRect();

        const x = ((clientX - left) / offsetWidth) * 2 - 1;
        const y = ((clientY - top) / offsetHeight) * 2 - 1;

        img.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'translate(0, 0)';
    });
});
