### Estrutura do projeto (desatualizada)

src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── svg/
│
├── components/         # 🔁 reutilizáveis no projeto inteiro
│   ├── ui/             # botões, inputs, cards
│   ├── layout/         # navbar, footer
│   └── common/         # coisas genéricas
│
├── pages/
│   ├── Home/
│   │   ├── components/  # 👈 componentes só da Home
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutPreview.jsx
│   │   │   └── ProjectsPreview.jsx
│   │   └── HomePage.jsx
│   │
│   ├── About/
│   │   ├── components/
│   │   └── AboutPage.jsx
│   │
│   ├── Skills/
│   │   ├── components/
│   │   └── SkillsPage.jsx
│   │
│   ├── Projects/
│   │   ├── components/
│   │   └── ProjectsPage.jsx
│   │
│   └── Contact/
│       ├── components/
│       └── ContactPage.jsx
│
├── routes/             # 👈 organização de rotas
│   └── AppRoutes.jsx
│
├── hooks/              # 👈 custom hooks (quando crescer)
├── utils/              # 👈 funções auxiliares
├── styles/             # global.css / tailwind config extra
│
├── App.jsx
└── main.jsx