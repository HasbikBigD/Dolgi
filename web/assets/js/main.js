document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {threshold: 0.2}
    );

    document.querySelectorAll('.card, .category-card, .gallery-card, .review-card, .form-card').forEach(el => {
        observer.observe(el);
    });
});



