import React, { Component } from 'react'
import './QuoteBox.css'
import Quote from './Quote'
import Author from './Author'
import { faRetweet } from "@fortawesome/free-solid-svg-icons"
import { faTwitter  } from "@fortawesome/free-brands-svg-icons"
import { faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getRandomQuote from '../logic/RandomQuote'
import {createAndOpenTweet, openGitHubPage} from '../logic/URLTools'


const colors = [ "#3b5998",
                    "#dc6900",
                    "#eb8c00",
                    "#559900",
                    "#e0301e", 
                    "#f7347a",
                    "#cc181e",
                    "#2793e8",
                    "#559900",
                    "#666666",
                    "#f1f1f1",
                    "#ff00a9",
                    "#fb9f9f",
                    "#ff0065",
                    "#ffbfd3",
                    "#fb5858",
                    "#009688",
                    "#35a79c",
                    "#54b2a9",
                    "#65c3ba",
                    "#83d0c9",]

class QuoteBox extends Component {
    constructor(props){
        super(props)

        
        
        this.state = {quote:null, author:null, color:colors[0]} // Set initial state

        this.generateNewQuote = this.generateNewQuote.bind(this)

    }
    
    async handleQuote()
    {
        var data = await getRandomQuote();
        var randColorIdx;
        var content = data.content;
        var author = data.author;
        var length = data.length;
        
        while(length > 60)
        {
            data = await getRandomQuote();
            content = data.content;
            author = data.author;
            length = data.length;
        }

        do{
            randColorIdx = this.generateRandomIndex(colors.length)
        } while(this.state.color === colors[randColorIdx])

        this.setState({quote:content, author:author, color:colors[randColorIdx]})
    }

    async componentDidMount() {
        await this.handleQuote()
    }

   async generateNewQuote(){
        
        await this.handleQuote();

       

    }

    generateRandomIndex(max)
    {
        return Math.floor(Math.random()*max); 
    }


    render() {
        return (
            <div className="whole-page" style={{backgroundColor:this.state.color}}>
                <div className="box">
                    <div className="quote-container">
                        <Quote text={this.state.quote} color={this.state.color}/>
                        <Author name={this.state.author} color={this.state.color}/>
                        <div className="button-box">
                            <button id="newQuoteBtn"className="action-button" onClick={this.generateNewQuote} style={{color:this.state.color}}><FontAwesomeIcon icon={faRetweet}/></button>
                            <button id="tweetBtn" className="action-button" style={{color:this.state.color}}onClick={() => createAndOpenTweet(this.state.quote, this.state.author)}><FontAwesomeIcon icon={faTwitter}/></button>
                            <button id="githubBtn" className="action-button" style={{color:this.state.color}}onClick={() => openGitHubPage()}><FontAwesomeIcon icon={faGithub}/></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuoteBox
