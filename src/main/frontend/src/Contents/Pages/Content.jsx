import React,{Component, Fragment} from 'react';
import '../../css/style.css';

class Content extends Component{
  render(){
    return (
      <div className="Content">
          <Fragment>
                <div 
                    className="ChatBotBtn" 
                    onClick={function(){
                        this.props.onChangePage('chatBot');
                    }.bind(this)}
                    >ChatBot</div>
                <div 
                    className="BlockChainBtn"
                    onClick={function(){
                        this.props.onChangePage('blockChain');
                    }.bind(this)}
                    >BlockChain</div>
            </Fragment>
      </div>
    );
  }
}

export default Content;
