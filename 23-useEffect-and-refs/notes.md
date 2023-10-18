## useRef & useEffect

The combination of both is a powerful tool to build complex components binding to external libraries that render to the DOM e.g. D3, Leaflet, Three.js, etc.

The trick is to use `useRef` to get a reference to the DOM element and `useEffect` to run code when the component is mounted and when the component is updated.
