# My Next.js App

This is a Next.js application that implements a master/detail data binding pattern. The application exposes APIs for managing master and detail records.

## Project Structure

```
my-nextjs-app
├── pages
│   ├── api
│   │   ├── master.ts       # API for master data
│   │   └── detail.ts       # API for detail data
│   ├── index.tsx           # Main entry point of the application
│   └── _app.tsx            # Custom App component
├── public                   # Static assets
├── styles
│   └── globals.css          # Global CSS styles
├── components
│   └── Layout.tsx          # Layout component for consistent structure
├── package.json             # npm configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Features

- **Master API**: Handles CRUD operations for master records.
- **Detail API**: Handles CRUD operations for detail records associated with master records.
- **Responsive UI**: Built with Next.js and React, providing a seamless user experience.
- **Global Styles**: Custom global styles defined in `globals.css`.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the development server with `npm run dev`.
5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.