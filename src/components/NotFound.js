import React from 'react'

class NotFound extends React.Component{
    state = {
        count: 5
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            let { count } = this.state
            this.setState({
                count: count-1
            })
            if(count <= 1) this.props.history.push('/home')
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render(){
        return (<div>
            <h2>404页面没有找到 <span className="text-danger">{ this.state.count }</span> s</h2>
        </div>)
    }
}

export default NotFound