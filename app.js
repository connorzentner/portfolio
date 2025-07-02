document.addEventListener('DOMContentLoaded', function() {
    const sectionSelector = 'section';
    const upArrowButton = document.getElementById('arrow-up');
    const downArrowButton = document.getElementById('arrow-down');

    function scrollToSection(direction) {
        const sections = document.querySelectorAll(sectionSelector);
        let currentSection = null;

        for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = sections[i];
                break;
            }
        }

        let targetSection;
        if (currentSection) {
            const currentIndex = Array.from(sections).indexOf(currentSection);
            if (direction === 'down') {
                if (currentIndex < sections.length - 1) {
                    targetSection = sections[currentIndex + 1]; 
                } else {
                    targetSection = sections[0]; 
                }
            } else if (direction === 'up') {
                if (currentIndex > 0) {
                    targetSection = sections[currentIndex - 1]; 
                } else {
                    targetSection = sections[sections.length - 1]; 
                }
            }
        } else {
            if (direction === 'down') {
                targetSection = sections[0];
            } else if (direction === 'up') {
                targetSection = sections[sections.length - 1];
            }
        }

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    upArrowButton.addEventListener('click', () => scrollToSection('up'));
    downArrowButton.addEventListener('click', () => scrollToSection('down'));
    // window.addEventListener('load', updateArrowButtonStates);
    // window.addEventListener('scroll', updateArrowButtonStates);
});
