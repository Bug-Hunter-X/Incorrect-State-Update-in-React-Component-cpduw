```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: setting count directly without using a setter function
    count = count + 1;
  }, []);

  return <div>Count: {count}</div>;
}
```