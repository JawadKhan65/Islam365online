
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver({
    showProgress: true,
    steps: [
        { element: '.page-header', popover: { title: 'Navigation', description: 'Navigate through different pages' } },
        { element: '.about', popover: { title: 'About', description: 'Explore About us.' } },
        { element: '.contact', popover: { title: 'Our Contacts here', description: 'See how you can contact us and know about us.' } },
        { element: '.content', popover: { title: 'Content', description: 'Wide range of content we have here.' } },
        { element: '.additional', popover: { title: 'Additional resources', description: 'Additional resources that can help us.' } },
        { element: '.chat', popover: { title: 'Start Chat with the Chatbot', description: 'Chat about Islam with out Islam365 GPT.' } },
        {
            element: '.sidebar1', popover: {
                title: 'AI-Powered Learning', description: 'Discover personalized learning experiences tailored to your interests and age group.Our platform offers a variety of resources and interactive content to help you understand Islam in a way that suits you best.Whether you are new to Islam or looking to deepen your knowledge, we have something for everyone.'
            }
        },
        {
            element: '.sidebar2', popover: {
                title: 'AI-Powered Guidance', description: ' Our advanced AI system extracts relevant knowledge from Islamic books and provides you with precise answers to your questions.This innovative approach ensures you receive accurate and valuable insights quickly, enhancing your learning journey.'
            }
        },
        {
            element: '.sidebar3', popover: {
                title: 'AI-Powered Guidance', description: ' Join a supportive community of learners and seekers. Engage in discussions, attend virtual events, and access a wealth of resources designed to assist you in your spiritual and educational journey. Our platform fosters a sense of belonging and provides the support you need to grow.'
            }
        },
        {
            element: '.sidebar4', popover: {
                title: 'Blogs', description: 'You can find latest Search by People as a Blog Post.'
            }
        },

        { element: '.footer', popover: { title: 'Information', description: 'You can find here all the information about us.' } },
    ],
    smoothScroll: true,



});

export const startDriver = () => {
    driverObj.drive();
};
