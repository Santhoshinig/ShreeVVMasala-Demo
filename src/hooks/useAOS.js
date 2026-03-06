import { useEffect } from 'react';

export default function useAOS() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const observe = () => {
            document.querySelectorAll('[data-aos]').forEach((el) => {
                observer.observe(el);
            });
        };

        observe();

        // Watch for DOM changes (critical for SPA navigation and dynamic lists)
        const mutationObserver = new MutationObserver(observe);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);
}
