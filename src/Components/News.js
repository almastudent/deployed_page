import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    
      constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
           
        }
      }

      async componentDidMount(){
        
        let url="https://newsapi.org/v2/top-headlines?country=in&catagory=bussiness&apiKey=50069ad0a47f47b190a0c7b65760ba19&page=1&pageSize=20"
        let data= await fetch(url)
        let parsedData=await data.json()
        //console.log(parsedData)
        this.setState({
          totalresults:parsedData.totalResults,
          articles:parsedData.articles
        })
        
      }

      handleNextnews= async()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalresults/20)){

        }else{

       
        let url=`https://newsapi.org/v2/top-headlines?country=in&catagory=bussiness&apiKey=50069ad0a47f47b190a0c7b65760ba19&page=${this.state.page+1}&pageSize=20`
        let data= await fetch(url)
        let parsedData=await data.json()
        //console.log(parsedData)
        this.setState({
          
          articles:parsedData.articles,
          page:this.state.page + 1
        })
       
        }
      }

     handlePrevnews= async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&catagory=bussiness&apiKey=50069ad0a47f47b190a0c7b65760ba19&page=${this.state.page-1}&pageSize=20`
        let data= await fetch(url)
        let parsedData=await data.json()
        //console.log(parsedData)
        this.setState({
          articles:parsedData.articles,
          page:this.state.page - 1
        })
     }



  render() {
    return (
      <div className="container my-3">
        <h2>NewsPilot-Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            let descript=element.description
            
           return <div className=" col-md-3" key={element.url}>
             <NewsItem title={element.title} description={descript} imgurl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
         
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevnews}>&larr; Previous</button>
        <button type="button" className="btn btn-dark"onClick={this.handleNextnews}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
