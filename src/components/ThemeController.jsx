import React, { useEffect, useState } from 'react';
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const ThemeController = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            setTheme(savedTheme);
        }
        else if (systemPrefersDark) {
            setTheme('dark')
        }
    }, [])

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div>
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    className="theme-controller" value="synthwave" />

                {

                    theme === 'dark' ?
                        (
                            <>
                                {/* sun icon */}
                                <FiSun className='text-3xl'/>
                            </>
                        )
                        :
                        (
                            <>
                                {/* moon icon */}
                                <FiMoon className='text-3xl'/>
                            </>
                        )

                }


            </label>
        </div >
    );
};

export default ThemeController;