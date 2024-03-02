import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgurl,newsUrl}=this.props
           var img=imgurl
    if(description !==null){
       var des= description.slice(0,70)
    }
    if(imgurl ===null || imgurl=== undefined){
       img= "https://media.gettyimages.com/id/1362320997/vector/error-message.jpg?s=612x612&w=0&k=20&c=ZSEMJGjbhEzBup2HmAi7-JJCs4ZQNwF0zZPQr6X8Jbs="
    } 
    return (
      <div className='my-3'> 
           <div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="Not Found"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,30)}</h5>
    <p className="card-text">{des}....</p>
    <a href={newsUrl} className="btn btn-primary btn-dark">See Details</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem