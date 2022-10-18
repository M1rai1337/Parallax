window.addEventListener('scroll', () => {
    let gonScroll = this.scrollY;
    let killuaScroll = gonScroll - window.screen.height;
    let kurapiko = killuaScroll - window.screen.height;
    document.body.style.cssText += `--gonScroll: ${gonScroll}px;
                                    --killuaScroll: ${killuaScroll}px;
                                    --kurapikoScroll: ${kurapiko}px;`;
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({});