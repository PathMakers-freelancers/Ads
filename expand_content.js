const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

// Expand about.html
const aboutPath = path.join(dir, 'about.html');
let aboutHtml = fs.readFileSync(aboutPath, 'utf8');

const newAboutTeamDesc = `We believe that every item has a story, and every service has a purpose. AdNova was built to be the premium layer connecting quality people with quality goods, securely and beautifully.
                <br><br>
                Founded in 2026, we recognized a massive gap in the digital marketplace: a lack of curated, high-trust environments for significant transactions. From rare vintage collectibles and modern architectural furniture to cutting-edge tech hardware and premium real estate, AdNova serves as the discerning nexus for buyers and sellers who demand excellence.`;

const newAboutMissionDesc = `For too long, classified ads platforms have been riddled with friction, poor design, and lack of trust. We engineered AdNova from the ground up to eradicate these pain points, employing state-of-the-art verification, a zero-latency interface, and a community-first support model.
                    <br><br>
                    Our mission isn't just to facilitate a transaction—it's to redefine the standard of e-commerce. By integrating AI-driven fraud detection, blockchain-verified digital certificates of authenticity for high-ticket items, and a UI design that honors the aesthetics of the products we host, we are building a sanctuary for global commerce.`;

aboutHtml = aboutHtml.replace('We believe that every item has a story, and every service has a purpose. AdNova was built to be the premium layer connecting quality people with quality goods, securely and beautifully.', newAboutTeamDesc);
aboutHtml = aboutHtml.replace('For too long, classified ads platforms have been riddled with friction, poor design, and lack of trust. We engineered AdNova from the ground up to eradicate these pain points, employing state-of-the-art verification, a zero-latency interface, and a community-first support model.', newAboutMissionDesc);

fs.writeFileSync(aboutPath, aboutHtml, 'utf8');

// Expand services.html
const servicesPath = path.join(dir, 'services.html');
let servicesHtml = fs.readFileSync(servicesPath, 'utf8');

const newServicesHeroDesc = `Whether you're clearing out your private collection or running a high-volume dealership, our platform scales to meet your exact needs. We offer a suite of professional tools designed to maximize your visibility, streamline your workflow, and guarantee secure transactions at every level.`;

servicesHtml = servicesHtml.replace('Whether you\'re clearing out your garage or running a high-volume dealership, our platform scales to meet your exact needs.', newServicesHeroDesc);

fs.writeFileSync(servicesPath, servicesHtml, 'utf8');

// Expand contact.html
const contactPath = path.join(dir, 'contact.html');
let contactHtml = fs.readFileSync(contactPath, 'utf8');

const newContactHeroDesc = `Our global teams are stationed around the clock to ensure your marketplace experience is flawless and secure. Whether you require technical assistance, trust & safety escalation, or business API integration support, the AdNova response team is ready to transmit a solution within minutes.`;

contactHtml = contactHtml.replace('Our global teams are stationed around the clock to ensure your marketplace experience is flawless and secure.', newContactHeroDesc);

fs.writeFileSync(contactPath, contactHtml, 'utf8');

console.log('Expanded content for About, Services, and Contact pages.');
