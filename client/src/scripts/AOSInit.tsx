
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
export const initializeAOS = () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
    });

    document.addEventListener('aos:out', () => console.log('Out'));
    document.addEventListener('aos:in', () => console.log('In'));
};

export default initializeAOS