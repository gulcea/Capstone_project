# Capstone Project Landing Page

## About

This project is a landing page application that provides access to the documentation and necessary files of the **SafeTalk** capstone project. It is a modern web interface containing all deliverables and team information for the SafeTalk project developed as part of Capstone Project 2025.

## Features

- **Project Overview**: General overview and features of the SafeTalk project
- **Deliverables Section**: Access to all documentation files (PDFs) within the project scope
- **Team Information**: Contact information and social media links of the project team
- **Modern UI**: Responsive design and animations
- **PDF Integration**: Project documentation files stored in `/public/pdfs/` folder and accessible from the page

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - UI components
- **Lucide React** - Icons

## Project Structure

```
Capstone_project/
├── public/
│   └── pdfs/                    # Project documentation PDFs
│       └── SafeTalk_Proposal.pdf
├── src/
│   ├── components/
│   │   ├── ui/                  # UI components (button, card, badge, accordion)
│   │   ├── BlurText.tsx         # Text animation component
│   │   └── ScrollStack.tsx      # Scroll animation component
│   ├── CapstoneLanding.tsx      # Main landing page component
│   ├── App.tsx                  # Main application component
│   └── lib/
│       └── utils.ts             # Utility functions
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## Installation and Running

### Requirements

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

3. Open `http://localhost:5173` in your browser.

### Build

To build for production:

```bash
pnpm build
```

## Documentation Files

Project documentation files are located in the `/public/pdfs/` folder:

- `SafeTalk_Proposal.pdf` - Project proposal
- Other documentation files (Specifications, Analysis, Design, Presentation) will be placed in this folder as they are added.

These files are accessible and downloadable through the landing page.

## Development

This project is a landing page/portfolio site. It provides access to the SafeTalk capstone project documentation and serves as a project showcase.

---

**Capstone Project 2025**
