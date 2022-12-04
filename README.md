# React-Router

React Router Helps for client side routing

## Basic Routing

**components used**

- first import `BrowserRouter` component inside `index.js` file
- wrap `<App />` component around `BrowserRouter` component that we imported

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```

To specify routing paths

- import Routes,Route components from `react-router-dom`

- Inside the Routes component specify your routes

```javascript
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
```

- In the above code `path` prop tells us in which path we need to render a component specified inside the `element` prop

- For example in my case i gave 2 paths `/` is kind of `home` route and `about` route is to display about page

## React Router Links

In the above example for navigating to different routes we manualy typed the path name and navigated there. So you might have observed in so many websites we have links to move around in this section we are gone be seeing the same.

- import `Link` component inside your file. `Link` component is similar to `a`(anchor) tag in plain html

```javascript
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
```

Add the below style inside `index.js`

```css
nav {
  background-color: #171111;
  padding: 2rem;
}

nav a {
  font-size: 2rem;
  text-decoration: none;
  padding: 1rem;
  color: #fff;
}
```

- You will see below output

![links-output](./images/Links.PNG)
