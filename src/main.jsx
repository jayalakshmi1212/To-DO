import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoList from './To-dolist.jsx'

createRoot(document.getElementById('root')).render(

 <TodoList/>
 
)
