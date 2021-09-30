import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sanjay Kumar Pandey',
  subtitle: 'Asst. Professor, NIFT Raebareli',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'san.jpg',
  paragraphOne: 'Present Status: Assistant Professor in Fashion Communication Department National Institute of Fashion Technology Raebareli (Competency H, Computer Application)',
  paragraphTwo: 'Area of Interest: Digital Design & Communication(Photoshop, Illustrator, Indesign), User interface design (Adobe XD), 2D Animation & Motion Graphics (Adobe after Effects) ,Auto Cad, Design research, Design strategies & System Thinking.',
  paragraphThree: 'Total Experience: 17 years teaching. Firstly worked as a Trainer in Softpro India Pvt Ltd Lucknow from 02 April 2004 To 30 July 2006(2 years), then worked at Institute of Environment & Management Lucknow (Affiliated to U.P. Technical University) as Assistant Professor from Aug 2006 to July 2014 (8 years) and currently working at National Institute of Fashion Technology (Raebareli) as Assistant Professor from July 2014 to till date.(7 years) ',
  resume: 'https://docs.google.com/document/d/1W8VhDeSGqq4s1h0-G6hJMgUsVDw1lyBa/edit?usp=sharing&ouid=113278868237424422883&rtpof=true&sd=true', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    info: '1. “A Survey on Tomorrow’s Internet and its Architecture” International Journal  of   Scientific    and Innovative Research (  P ISSN 2347-2189 &E ISSN2347-4971) Volume -1, Issue-2 (July –December) 2013)    ',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    info: '2. “Impact of Digital Illustration on Fashion World” E-BOOK “Changing Paradigm of Management Practices for Sustainable Development Organised by: School for Management Studies BBAU Central University Luc now.ISBN:978-93-85895-15-9    ',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    info: '3. “COVID-19 Harbinger of Technological Take Off” in National Article Writing Competition on Topic “COVID-19, A Global Pandemic: Prospects & Challenges”, held from 05/05/2020 Lucknow. Presented the article at National Webinar organized on 27/05/2020.',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    info: '4. “Enhancing Commercial Viability of Indian Craft Using Digital Technology” Chapter 4, Contemporary Research in Management. ISBN NO. 9789390307623',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    info: '5. "Study of introducing Home furnishing products and Marketing Strategy in Varanasi brocade" International Journal of   Scientific    and Innovative Research (  P ISSN 2347-2189 &E ISSN2347-4971) Vol-9 Issue -1, January-June) 2021. ',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '+919450023962',
  btn:'Mail me',
  email: 'sanjay.pandey@nift.ac.in',
};

// FOOTER DATA
export const footerData = {
  networks: [
   /* {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },*/
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sanjay-pandey-1624b928',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
