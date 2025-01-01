import React, { useEffect } from 'react';
import './Footer.css'; // Footer styles
import './chatbot.css'; // Chatbot styles
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    // Chatbot functionality script
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbot = document.getElementById('chatbot');
    const closeChatbot = document.getElementById('close-chatbot');

    // Open Chatbot
    chatbotButton.addEventListener('click', () => {
      chatbot.setAttribute('aria-hidden', 'false');
      chatbot.style.display = 'block';
    });

    // Close Chatbot
    closeChatbot.addEventListener('click', () => {
      chatbot.setAttribute('aria-hidden', 'true');
      chatbot.style.display = 'none';
    });
  }, []);

  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} <a href="https://skyriz.org" className="footer-link" target="_blank" rel="noopener noreferrer">Skyriz</a>. All rights reserved.
      </p>
      
      {/* Optional: Social Media Links */}
      <div className="social-links">
        <a href="https://twitter.com/skyrizapp" aria-label="Skyriz Twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/share/1jgCNA7tmfwQ5hJi/?mibextid=LQQJ4d" aria-label="Skyriz Facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/skyriz.app" aria-label="Skyriz Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/skyriz" aria-label="Skyriz LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>

      {/* AI Chatbot */}
      <div id="chatbot" aria-label="AI Assistant Chat Window" aria-hidden="true" role="dialog">
        <div id="chatbot-header">
          <span>Kojib</span>
          <button id="close-chatbot" aria-label="Close Chatbot" title="Close Chatbot">&times;</button>
        </div>
        <div id="chatbot-messages" role="log" aria-live="polite" tabindex="0" aria-label="Chat Messages">
          {/* Chat messages will be dynamically injected here */}
        </div>
        <div id="chatbot-input" role="form" aria-label="Chat Input">
          <textarea id="user-input" placeholder="Dream it. Ask it. Build it. I’m Kojib—your AI for infinite possibilities." aria-label="Type your message" aria-required="true"></textarea>
          <button id="send-message" aria-label="Send Message" title="Send Message">Send</button>
        </div>
      </div>
      <div id="chatbot-button" role="button" aria-label="Open Chatbot" title="Open Chatbot">
        <img src="image/chat-icon.svg" alt="Chat Icon" />
      </div> 
    </footer>
  );
};

export default Footer;
