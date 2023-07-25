import javascript from '../assets/images/javascript3.png'
import python3 from '../assets/images/python3.png'
import html from '../assets/images/html3.png'
import css from '../assets/images/css4.png'
import sql from '../assets/images/sql2.jpeg'

import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import express from '../assets/images/express.png'
import django from '../assets/images/django.png'
import djangorestframework from '../assets/images/djangorestframework.png'
import mongodb from '../assets/images/mongodb.png'
import mongoose from '../assets/images/mongoose.png'
import postgresql from '../assets/images/postgresql.png'
import prisma from '../assets/images/prisma.png'
import tailwind from '../assets/images/tailwind.png'
import bootstrap from '../assets/images/bootstrap.png'
import ejs from '../assets/images/ejs.png'
import heroku from '../assets/images/heroku.png'
import netlify from '../assets/images/netlify.png'

import downbeatGIF from '../assets/gifs/downbeatGIF.gif'
import downbeat1 from '../assets/projectSlideImages/downbeat/downbeat1.png'
import downbeat2 from '../assets/projectSlideImages/downbeat/downbeat2.png'
import downbeat3 from '../assets/projectSlideImages/downbeat/downbeat3.png'
import downbeat4 from '../assets/projectSlideImages/downbeat/downbeat4.png'

import catalyst1 from '../assets/projectSlideImages/catalyst/catalyst1.png'
import catalyst2 from '../assets/projectSlideImages/catalyst/catalyst2.png'
import catalyst3 from '../assets/projectSlideImages/catalyst/catalyst3.png'

import cisms1 from '../assets/projectSlideImages/cisms/cisms1.png'
import cisms2 from '../assets/projectSlideImages/cisms/cisms2.png'
import cisms3 from '../assets/projectSlideImages/cisms/cisms3.png'

import checkers1 from '../assets/projectSlideImages/ultimateLeapfrog/checkers1.png'
import checkers2 from '../assets/projectSlideImages/ultimateLeapfrog/checkers2.png'
import checkers3 from '../assets/projectSlideImages/ultimateLeapfrog/checkers3.png'
import checkers4 from '../assets/projectSlideImages/ultimateLeapfrog/checkers4.png'

const Projects = [
  {
    title: 'downbeat',
    subheader: 'a React-based drum machine',
    id: 'downbeat',
    description: 'downbeat is a compact DAW (Digital Audio Workstation) that allows you to quickly create beats using a handful of provided drum samples. The interface is intentially minimal and easy to use: simply add a track, pick a sample, click some nodes, and press play.',
    technologies: [react, express, mongodb, mongoose, node, tailwind, javascript, css, heroku],
    liveLink: 'https://downbeat-daw.herokuapp.com/',
    githubLink: 'https://github.com/Vilem-McKael/downbeat',
    demoGIF: downbeatGIF,
    images: [
      downbeatGIF,
      downbeat1,
      downbeat2,
      downbeat3,
      downbeat4
    ]
  },
  {
    
    title: 'Catalyst',
    subheader: 'Sparking Great Ideas',
    id: 'catalyst',
    description: 'A community-driven web application in which users can create and join Collectives - forums in which they can exchange ideas with like-minded individuals.',
    technologies: [react, django, djangorestframework, postgresql, python3, javascript, tailwind, heroku, netlify],
    liveLink: 'https://zippy-cranachan-baf821.netlify.app/',
    githubLink: 'https://github.com/Vilem-McKael/Catalyst',
    demoGIF: '',
    images: [catalyst1, catalyst2, catalyst3]
  },
  {
    title: 'Can I Share My Screen?',
    subheader: 'I\'m having a problem with my code... can I share my screen?',
    id: 'cisms',
    description: 'Can I Share My Screen is a social code-sharing application, enabling programmers to post their code snippets or questions and receive feedback from their peers.',
    technologies: [express, node, mongodb, mongoose, bootstrap, heroku],
    liveLink: 'https://can-i-share-my-screen.herokuapp.com/',
    githubLink: 'https://github.com/Tri-Coders-SMV/can-i-share-my-screen',
    demoGIF: '',
    images: [cisms1, cisms2, cisms3]
  },
  {
    title: 'Ultimate Leapfrog',
    subheader: 'An In-Browser Checkers Game',
    id: 'checkers',
    description: 'This two player in-browser checkers game includes many features of the classic board game, including king pieces and forced capturing.',
    technologies: [html, css, javascript],
    liveLink: 'https://vilem-mckael.github.io/Ultimate-Leapfrog-Checkers-Game/',
    githubLink: 'https://github.com/Vilem-McKael/Ultimate-Leapfrog-Checkers-Game',
    demoGIF: '',
    images: [checkers1, checkers2, checkers3, checkers4]
  },
  {
    title: 'This Portfolio',
    subheader: 'Anyone up for some recursion?',
    id: 'portfolio',
    description: 'Possibly the greatest portfolio, website even, of all time',
    technologies: [react, express, node, tailwind],
    liveLink: 'https://vilemmckael.netlify.app',
    githubLink: 'https://github.com/Vilem-McKael/portfolio',
    demoGIF: '',
    images: []
  },
  {
    
    title: 'Vouch',
    subheader: 'What will you vouch for?',
    id: 'vouch',
    description: 'A place to vouch for what you\'re watching, listening to, reading, and more! Check out what art is currently popular among your friends and beyond. Coming Soon!',
    technologies: [],
    liveLink: '#',
    githubLink: '#',
    demoGIF: '',
    images: []
  },
  {
    title: 'downbeat iOS',
    subheader: 'make music on the go - anywhere, anytime',
    id: 'downbeat-ios',
    description: 'Coming Soon!',
    technologies: [],
    demoGIF: '',
    liveLink: '#',
    githubLink: '#',
    images: []
  },
]

  export default Projects;