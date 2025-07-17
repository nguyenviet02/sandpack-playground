# TSX Live Editor

A simple React application that allows you to write and preview TSX code in real-time without any build steps.

## Features

- Write TSX code in the editor panel
- See live preview in the preview panel
- Syntax highlighting for TSX code
- Error handling for compilation and runtime errors
- Support for React hooks and TypeScript syntax
- Debounced preview updates to prevent constant re-rendering while typing
- Smart error messages that are more helpful than raw compiler errors

## How it Works

This application uses:
- `@babel/standalone` to transform TSX code to JavaScript on the client side
- `@babel/preset-typescript` for TypeScript support
- `react-simple-code-editor` for the code editor with syntax highlighting
- `prismjs` for syntax highlighting

The code you write is transformed using Babel and then executed in a sandboxed environment to create React components that are rendered in the preview panel.

## Usage

1. Write TSX code in the left editor panel
2. The right panel will automatically show a live preview after you stop typing
3. Error messages will be displayed if there are compilation or runtime errors

### Writing TSX Code

You can write your code in two ways:

1. **Component with return statement** (recommended)
```tsx
function MyComponent() {
  const [state, setState] = useState(0);
  return <div>Component content</div>;
}

return <MyComponent />;
```

2. **Direct JSX/TSX** (will be automatically wrapped)
```tsx
<div>
  <h1>Hello World</h1>
  <p>This will be automatically wrapped in a component</p>
</div>
```

### Available React Features

- All standard React hooks (useState, useEffect, useRef, etc.)
- TypeScript type annotations
- JSX/TSX syntax
- Event handlers

### Example

```tsx
// Write a TSX component
interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      style={{ padding: '8px 16px', borderRadius: '4px' }}
    >
      {label}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Counter: {count}</h2>
      <Button 
        label="Increment" 
        onClick={() => setCount(count + 1)} 
      />
    </div>
  );
}

// Return the component to render it
return <Counter />;
```

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Limitations

- No support for external npm packages
- Limited TypeScript support (basic type checking only)
- No file system access or imports from other files
