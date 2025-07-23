
import React from 'react';
// Footer Component (Footer.js)

const Footer = () => {
            const scrollToSection = (sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };

            return (
                 <section id="footer">
                <footer className="bg-gray-900 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="col-span-1 md:col-span-2">
                                <h3 className="text-2xl font-bold gradient-text mb-4">Ajaykumar Reddy Devarapalli</h3>
                                <p className="text-gray-400 mb-6 max-w-md">
                                    Full Stack Java Developer skilled in Spring Boot, React.js, and AWS. Passionate about building scalable, secure, and impactful digital solutions across domains.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/ajaykumar-reddy-devarapalli" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>

                            <div>
                                {/* <h4 className="font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-green-400 transition-colors">Home</button></li>
                                    <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-green-400 transition-colors">About</button></li>
                                    <li><button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-green-400 transition-colors">Skills</button></li>
                                    <li><button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-green-400 transition-colors">Portfolio</button></li>
                                    <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-green-400 transition-colors">Contact</button></li>
                                </ul> */}
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">Skills</h4>
                                <ul className="space-y-2">
                                    <li><span className="text-gray-400 hover:text-green-400 transition-colors">Full Stack Development</span></li>
                                    <li><span className="text-gray-400 hover:text-green-400 transition-colors">Cloud Deployments</span></li>
                                    <li><span className="text-gray-400 hover:text-green-400 transition-colors">API & Microservices</span></li>
                                    <li><span className="text-gray-400 hover:text-green-400 transition-colors">Data Engineering</span></li>
                                    <li><span className="text-gray-400 hover:text-green-400 transition-colors">Resume & Portfolio Automation</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                            <p className="text-gray-400">
                                &copy; 2025 Ajaykumar Reddy Devarapalli. All rights reserved. Built with passion for clean code & problem-solving.
                            </p>
                        </div>
                    </div>
                </footer>
                </section>
            );
        };

export default Footer;