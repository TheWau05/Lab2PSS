import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CustomHook } from '../components/CustomHook.jsx'
import CustomHookLab2 from '../components/CustomHookLab2.jsx'
import { RickMortyInfo } from '../components/RickMortyInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHookLab2 />
    <RickMortyInfo />
  </StrictMode>,
)
