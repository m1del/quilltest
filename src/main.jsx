import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Editor from './Editor.jsx'
import EditorWithUseQuill from './EditorWithUseQuill.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditorWithUseQuill />
  </React.StrictMode>,
)
