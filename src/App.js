import React, {Component} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Resume from './components/Resume'

class App extends Component{
    render() {
        return (
            <Router basename = '/'>
                <div className = 'app'>
                    <Header />
                    <main>
                        <Route exact path = '/' component = {Home} />
                        <Route exact path = '/about' component = {About} />
                        <Route exact path = '/contact' component = {Contact} />
                        <Route exact path = '/portfolio' component = {Portfolio} />
                        <Route exact path = '/resume' component = {Resume} />
                    </main>
                    <Footer />
                </div>
            </Router>
        )
    }    
}

export default App

