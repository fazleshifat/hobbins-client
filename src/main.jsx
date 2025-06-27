import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './components/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './AuthProvider/AuthProvider'
import loading from '../public/animations/water.json'
import Lottie from 'lottie-react'

// Simple spinner JSX
const Spinner = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
    {/* <span className="loading loading-spinner text-gray-500 w-14"></span> */}
    <Lottie animationData={loading} className='w-50'></Lottie>
    {/* <img src="/assets/logo.png" className='w-8 md:w-20' alt="logo" /> */}
  </div>
)

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1500); // simulate delay
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);
  if (loading) return <Spinner />

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)