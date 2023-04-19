export const resources = {
  navigation: {
    links: [
      {
        img: '/static/contactInfo/gmail-black.svg',
        label: 'email',
        href: 'mailto:shlokova777@gmail.com',
      },
      {
        img: '/static/contactInfo/linkedin-black.svg',
        label: 'linkedIn',
        href: 'https://www.linkedin.com/in/anna-shlokova-2b5a99255/',
      },
      {
        img: '/static/contactInfo/telegram-black.svg',
        label: 'telegram',
        href: 'https://t.me/Shlokova',
      },
      {
        img: '/static/contactInfo/github.svg',
        label: 'github',
        href: 'https://github.com/Shlokova/',
      },
    ],
    menuIcon: '/static/navigation/menu.svg',
    photo: '/static/navigation/mini-photo.webp',
    name: 'Shlokova Anna',
  },
  about: {
    title: 'Shlokova Anna',
    subtitle: 'frontend developer',
    image: '/static/about/photo.webp',
    description:
      'Sociable and hardworking front-end developer with 1 years of experience in website development. Highly skilled in HTML/CSS/JavaScript/React and working knowledge of Photoshop and Figma.',
    buttonText: 'Download cv',
    info: {
      title: 'What I do',
      information: [
        'Implementing web design and development principles to build stable software.',
        'Bringing mock-ups to life using HTML, CSS, JavaScript.',
        'Collaborating closely with the team to support projects during all phases of delivery.',
        'Building websites and apps that are responsive and usable.',
        'Maintaining an organized workflow using a project management tool.',
        'Testing to identify bugs and technical issues.',
      ],
    },
  },
  educationPage: {
    title: 'Education',
    educationInfo: [
      {
        university: 'St Petersburg University',
        educationProgram: 'Applied Mathematics, Fundamental Informatics and Programming',
        place: 'Saint Petersburg',
        years: '2017 - 2021',
      },
      {
        university: 'St Petersburg University',
        educationProgram: 'Applied Mathematics, Fundamental Informatics and Programming',
        place: 'Saint Petersburg',
        years: '2021 - present',
      },
      {
        university: 'BEEINTERNS',
        educationProgram: 'Beeline`s IT school: \n development of web-interfaces',
        place: 'Online',
        years: `February - March \n 2022`,
      },
      {
        university: 'Tinkoff fintech',
        educationProgram: 'Frontend development:\nHTML/CSS, JS, React',
        place: 'Online',
        years: 'February - May 2022',
      },
    ],
  },
  experiencePage: {
    title: 'Experience',
    information: [
      {
        workplace: 'Modification of the public transport network',
        tasks: [
          'Implementation of a web application for visualizing changes in the public transport network',
          'Development of functional elements',
        ],
        technology: ['JS', 'HTML', 'CSS', 'RestAPI'],
        post: 'frontend developer',
        years: 'July 2021',
      },
      {
        workplace: 'ITMO University ',
        tasks: [
          'Work on an application that displays real-time occupancy of premises',
          'Creating a plugin for Grafana',
          'Project refactoring',
        ],
        technology: ['React', 'Grafana', 'Vue', 'TypeScript', 'JS', 'SCSS', 'RestAPI'],
        post: 'frontend developer',
        years: 'February - July 2022',
      },
      {
        workplace: 'Tinkoff',
        tasks: [
          'Development of landing pages',
          'Game web application development',
          'Refactoring of old projects, with a change in the technological stack of the project',
          'Support for production applications',
          'Adding custom analytics to projects',
        ],
        technology: ['JS', 'TypeScript', 'React', 'PostCSS', 'NextJs', 'RestApi', 'Vue', 'MobX'],
        post: 'frontend developer',
        years: 'July 2022 - March 2023',
      },
    ],
  },
  skillsPage: {
    softSkills: {
      title: 'Soft Skills',
      items: [
        {
          label: 'Reliable',
          icon: '/static/softSkill/reliable.svg',
        },
        {
          label: 'Communicative',
          icon: '/static/softSkill/communicative.svg',
        },
        {
          label: 'Creative',
          icon: '/static/softSkill/creative.svg',
        },
        {
          label: 'Adaptability',
          icon: '/static/softSkill/adaptability.svg',
        },
        {
          label: 'Hard-working',
          icon: '/static/softSkill/hard-working.svg',
        },
      ],
    },
    HardSkills: {
      title: 'Hard Skills',
      items: {
        js: {label: 'JavaScript', percent: 60, icon: '/static/hardSkill/logo-js.svg'},
        html: {label: 'HTML5', percent: 100, icon: '/static/hardSkill/logo-html.svg'},
        css: {label: 'CSS3', percent: 70, icon: '/static/hardSkill/logo-css.svg'},
        react: {label: 'React', percent: 60, icon: '/static/hardSkill/logo-react.svg'},
        ts: {label: 'TypeScript', percent: 40, icon: '/static/hardSkill/logo-ts.svg'},
        less: {label: 'LESS', percent: 40, icon: '/static/hardSkill/logo-less.svg'},
        sass: {label: 'SASS', percent: 50, icon: '/static/hardSkill/logo-sass.svg'},
        vue: {label: 'Vue', percent: 30, icon: '/static/hardSkill/logo-vue.svg'},
        redax: {label: 'Redax', percent: 30, icon: '/static/hardSkill/logo-vue.svg'},
        mobX: {label: 'MobX', percent: 30, icon: '/static/hardSkill/logo-vue.svg'},
        nextJs: {label: 'NextJS', percent: 30, icon: '/static/hardSkill/logo-vue.svg'},
        webpack: {label: 'Webpack', percent: 40, icon: '/static/hardSkill/logo-webpack.svg'},
        git: {label: 'Git', percent: 60, icon: '/static/hardSkill/logo-git.svg'},
        figma: {label: 'Figma', percent: 40, icon: '/static/hardSkill/logo-figma.svg'},
        photoshop: {label: 'Adobe Photoshop', percent: 40, icon: '/static/hardSkill/logo-photoshop.svg'},
        illustrator: {label: 'Adobe Illustrator', percent: 40, icon: '/static/hardSkill/logo-illustrator.svg'},
        sql: {label: 'SQL', percent: 20, icon: '/static/hardSkill/logo-sql.svg'},
        jira: {label: 'Jira', percent: 50, icon: '/static/hardSkill/logo-c.svg'},
      },
    },
  },
  projectsPage: {
    title: 'Projects',
    projects: [
      {
        title: 'Resume',
        description: 'The first project made with pure html and css',
        preview: '/static/projects/cv.webp',
        link: 'https://shlokova.github.io/CV-Shlokova/',
        date: '04.11.2021 - 07.11.2021',
        technology: ['CSS', 'HTML'],
      },
      {
        title: 'Frontend Marathon',
        description: '5 day front-end development marathon.',
        preview: '/static/projects/marathon.webp',
        link: 'https://github.com/Shlokova/marathon',
        date: '27.11.2021 - 01.12.2021',
        technology: ['HTML', 'JS', 'CSS'],
      },
      {
        title: 'Frontend Notes',
        description:
          'Notes on HTML, CSS, JS and React for remembering the most important and interesting moments related to programming',
        preview: '/static/projects/notes.webp',
        link: 'https://react-notes-12510.web.app/notes',
        date: '04.11.2021 - 31.01.2022',
        technology: ['React', 'JS', 'CSS', 'Firebase', 'React Hooks'],
      },
      {
        title: 'NASA Instagram',
        description: 'Test task for the first job. Similarity to Instagram using data from NASA API.',
        preview: '/static/projects/nasa.webp',
        link: 'https://shlokova.github.io/NASA-Insta-app/',
        date: '03.02.2022 - 06.02.2022',
        technology: ['React', 'JS', 'CSS', 'NASA API', 'React Hooks'],
      },
      {
        title: 'Health Helper',
        description:
          'Graduation work from courses on front-end development. SPA application with authorization and work with the database.',
        preview: '/static/projects/health.webp',
        link: 'https://health-helper-f5470.web.app/',
        date: '12.04.2022 - 11.05.2022',
        technology: ['React', 'TS', 'CSS', 'Firebase', 'React Hooks', 'Redux'],
      },
    ],
  },
  extraPage: {
    art: {
      title: 'Art',
      description:
        'In my free time I like to draw. This is one of the reasons why I chose front-end development as my\n' +
        '            profession. You can see some of my work on ',
      image: '/static/extra/insta.webp',
      link: {label: 'Instagram', href: 'https://www.instagram.com/or_ann_ge/?igshid=vfi580tf99gu'},
    },
    article: {
      title: 'Article',
      items: [
        {
          title:
            'Construction of Stability Regions in the Parameter Space in a Penning Trap with a Rotating Electric Field',
          description: `The dynamics of particles in a Penning trap with a rotating dipole electric field and a buffer gas is considered. A transition is made to a coordinate system that rotates together with the electric field, which
        makes it possible to reduce the system of ordinary differential equations with periodic coefficients to a
        linear differential system with a constant matrix. Using one of the modifications of the Hurwitz stability
        criterionthe Lienard-Chipart criterion, the stability analysis (according to Lyapunov) of particle motions
        in the trap is carried out and the stability regions in the trap parameter space are found.Calculations were
        carried out for a trap with “typical” main parameters. The biggest degree of stability was obtained at
        frequencies of rotation of the field close to “resonant”. Small relative deviations from these frequencies
        led to a significant decrease in the degree of stability and loss of stability at “small” values of the
        amplitude of the rotating field. At the same time, it was possible to partially compensate this by
        increasing the amplitude of the rotating field, but only to certain limits, after which stability was again
        lost.`,
          authors: 'A.D. Ovsyannikov, A.I. Shlokova, A.A. Komarova',
          link: 'http://mathizv.isu.ru/en/article?id=1368',
        },

        {
          title:
            ' SEARCH FOR STABILITY REGIONS IN THE SPACE OF COEFFICIENTS IN A PENNING-MALMBERG-SURKO TRAP WITH A ROTATING\n' +
            '          ELECTRIC QUADRUPOLE FIELD',
          description: ` In this paper the dynamics of particles in a Penning-Malmberg-Surko Trap with a rotating electric quadrupole
            field for various values of parameters was considered and the stability regions were determined.`,
          authors: 'A.D. Ovsyannikov, A.I. Shlokova, A.A. Komarova',
          link: 'https://www.elibrary.ru/item.asp?id=44830236',
        },
      ],
    },
  },
} as const;
