import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Master/Detail App</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/master">Master Records</a></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Master/Detail App</p>
            </footer>
        </div>
    );
};

export default Layout;