import React,{Component} from 'react';
export default class MessageForm extends Component{
  constructor(){
    super();
    this.state = {author:'',content:''};
  }
  handleSubmit = (event)=>{
    event.preventDefault();//一定要阻止默认提交事件，否则会刷新页面
    this.props.addMessage(this.state);
    this.setState({content:''});
  }
  render(){
    //event.target 就是真正的原生的DOM对象
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label">姓名</label>
          <input onChange={event=>this.setState({author:event.target.value})} required type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">内容</label>
          <textarea value={this.state.content} onChange={event=>this.setState({content:event.target.value})}  required className="form-control" cols="30" rows="10"></textarea>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
}