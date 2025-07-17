# Chart.js Sandbox

An interactive sandbox for experimenting with Chart.js and React in real-time.

## Features

- Live code editing with preview
- Built-in Chart.js examples:
  - Line Chart
  - Bar Chart 
  - Pie Chart
- Real-time preview of chart changes
- Powered by Sandpack and Vite

## How It Works

This application uses:
- `@codesandbox/sandpack-react` to provide an interactive code sandbox
- Vite for fast development and bundling

The sandbox allows you to edit chart examples and see the results immediately in the preview panel.

## Chart Examples

The sandbox includes examples of:

1. **Line Chart** - Shows data trends over a sequence
2. **Bar Chart** - Compares values across categories
3. **Pie Chart** - Shows proportional distribution of data

Each example demonstrates proper Chart.js setup with React, including the necessary component registrations.

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Customizing Sandpack

### Adding Dependencies

Modify the `customSetup` object in the `SandpackProvider` to change or add dependencies:

```jsx
customSetup={{
  dependencies: {
    react: '^18.2.0',
    'react-dom': '^18.2.0',
    'chart.js': 'latest',
    'react-chartjs-2': 'latest',
    // Add more dependencies here
  },
  entry: '/App.jsx', // Entry file
}}
```

### Managing Files

Add or modify files using the `files` object:

```jsx
files={{
  '/App.jsx': {
    code: appCode, // Reference a variable containing the code
  },
  '/LineChart.jsx': {
    code: lineChartCode,
  },
  // Add more files as needed
  '/NewComponent.jsx': {
    code: `export const NewComponent = () => { return <div>New Component</div> }`,
  },
}}
```

Each file requires a path key and a code property containing the file contents.

## Requirements

- Node.js 16+
- pnpm (recommended) or npm

## License

MIT
