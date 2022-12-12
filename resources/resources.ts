export const resources = {
  about: {
    links: [
      {
        img: '',
        label: 'telegram',
        href: '',
      },
      {
        img: '',
        label: 'email',
        href: '',
      },
      {
        img: '',
        label: 'linkedIn',
        href: '',
      },
      {
        img: '',
        label: 'github',
        href: '',
      },
    ],
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
        place: ' Saint Petersburg',
        command: 'university team',
        post: 'frontend developer',
        years: 'July 2021',
      },
      {
        workplace: 'ITMO University ',
        place: ' Saint Petersburg',
        command: 'Educational analytics',
        post: 'frontend developer',
        years: 'February - July 2022',
      },
      {
        workplace: 'Tinkoff',
        place: ' Saint Petersburg',
        command: 'Special projects',
        post: 'frontend developer',
        years: 'July 2022 - present',
      },
    ],
  },
  skillsPage: {
    softSkills: {
      title: 'Soft Skills',
      items: [
        {
          label: 'Reliable',
          icon: '/softSkill/reliable.svg',
        },
        {
          label: 'Communicative',
          icon: '/softSkill/communicative.svg',
        },
        {
          label: 'Creative',
          icon: '/softSkill/creative.svg',
        },
        {
          label: 'Adaptability',
          icon: '/softSkill/adaptability.svg',
        },
        {
          label: 'Hard-working',
          icon: '/softSkill/hard-working.svg',
        },
      ],
    },
    HardSkills: {
      title: 'Hard Skills',
      items: {
        js: {label: 'JavaScript', percent: 60, icon: '/hardSkill/logo-js.svg'},
        html: {label: 'HTML5', percent: 100, icon: '/hardSkill/logo-html.svg'},
        css: {label: 'CSS3', percent: 70, icon: '/hardSkill/logo-css.svg'},
        react: {label: 'React', percent: 60, icon: '/hardSkill/logo-react.svg'},
        ts: {label: 'TypeScript', percent: 40, icon: '/hardSkill/logo-ts.svg'},
        less: {label: 'LESS', percent: 40, icon: '/hardSkill/logo-less.svg'},
        sass: {label: 'SASS', percent: 50, icon: '/hardSkill/logo-sass.svg'},
        vue: {label: 'Vue', percent: 30, icon: '/hardSkill/logo-vue.svg'},
        redax: {label: 'Redax', percent: 30, icon: '/hardSkill/logo-vue.svg'},
        mobX: {label: 'MobX', percent: 30, icon: '/hardSkill/logo-vue.svg'},
        nextJs: {label: 'NextJS', percent: 30, icon: '/hardSkill/logo-vue.svg'},
        webpack: {label: 'Webpack', percent: 40, icon: '/hardSkill/logo-webpack.svg'},
        git: {label: 'Git', percent: 60, icon: '/hardSkill/logo-git.svg'},
        figma: {label: 'Figma', percent: 40, icon: '/hardSkill/logo-figma.svg'},
        photoshop: {label: 'Adobe Photoshop', percent: 40, icon: '/hardSkill/logo-photoshop.svg'},
        illustrator: {label: 'Adobe Illustrator', percent: 40, icon: '/hardSkill/logo-illustrator.svg'},
        sql: {label: 'SQL', percent: 20, icon: '/hardSkill/logo-sql.svg'},
        jira: {label: 'Jira', percent: 50, icon: '/hardSkill/logo-c.svg'},
      },
    },
  },
  projectsPage: {
    title: 'Projects',
    projects: [
      {
        title: 'Resume',
        description: 'The first project made with pure html and css',
        preview: '/projects/cv.png',
        link: 'https://shlokova.github.io/CV-Shlokova/',
        date: '04.11.2021 - 07.11.2021',
        technology: ['CSS', 'HTML'],
      },
      {
        title: 'Frontend Marathon',
        description: '5 day front-end development marathon.',
        preview: '/projects/marathon.png',
        link: 'https://github.com/Shlokova/marathon',
        date: '27.11.2021 - 01.12.2021',
        technology: ['HTML', 'JS', 'CSS'],
      },
      {
        title: 'Frontend Notes',
        description:
          'Notes on HTML, CSS, JS and React for remembering the most important and interesting moments related to programming',
        preview: '/projects/notes.png',
        link: 'https://react-notes-12510.web.app/notes',
        date: '04.11.2021 - 31.01.2022',
        technology: ['React', 'JS', 'CSS', 'Firebase', 'React Hooks'],
      },
      {
        title: 'NASA Instagram',
        description: 'Test task for the first job. Similarity to Instagram using data from NASA API.',
        preview: '/projects/nasa.png',
        link: 'https://shlokova.github.io/NASA-Insta-app/',
        date: '03.02.2022 - 06.02.2022',
        technology: ['React', 'JS', 'CSS', 'NASA API', 'React Hooks'],
      },
      {
        title: 'Health Helper',
        description:
          'Graduation work from courses on front-end development. SPA application with authorization and work with the database.',
        preview: '/projects/health.png',
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
      image: '/insta.png',
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
