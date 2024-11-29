import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/feed">Feed</Link>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/login" element={<h1>Login</h1>} />
                <Route path="/feed" element={<h1>Feed</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
