import React from 'react';

class Application extends React.Component {
    constructor(props) {
      super(props);
      var date= this.getTimeString();
      this.state= {
        time: date
      }
    }
    getTimeString() {
      const date = new Date(Date.now()).toLocaleTimeString();
      return date;
    }
    componentDidMount() {
      const _this = this;
      this.timer = setInterval(function(){
        var date = _this.getTimeString();
        _this.setState({
          time: date
        })
      },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
      return(
        <p style={{
            position:'absolute',
            right: '50px',
            bottom: '0px',
            color: 'black',
        }}>{this.state.time}</p>
      );
    }
  }
  

  export default Application;