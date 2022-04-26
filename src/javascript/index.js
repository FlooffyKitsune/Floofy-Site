import React from 'react';
import { render } from 'react-dom';
import '../styles/style.scss'
import App from "./components/App";

const app = document.getElementById("app");
render(<App />, app);