'use strict'
class CounterApp extends React.Component {
    constructor(){
        super()

        this.state = {
            num: 0
        }
    }

decrease = e => {
    e.preventDefault()
    this.setState(prevState => {
        return {num: prevState.num -1}
    })
}

increase = e => {
    e.preventDefault()
    this.setState(prevState => {
        return {num: prevState.num +1}
    })
}

render(){
    return <form>
        <button onClick={this.decrease}>D</button>
        <h1>{this.state.num}</h1>
        <button onClick={this.increase}>I</button>
    </form>
}
}






ReactDOM.render(<CounterApp />, document.getElementById('root'))


// class CounterApp extends React.Component {
//     constructor() {
//         super()

//         this.state = {
//             num: 0
//         }
//     }


//     increment = e => {
//         e.preventDefault()
//         this.setState(prevState => {
//             return { num: prevState.num + 1 }
//         })
//     }

//     decrement = e => {
//         e.preventDefault()
//         this.setState(prevState => {
//             return { num: prevState.num - 1 }
//         })
//     }

//     render() {
//         return <form>
//             <button onClick={this.decrement}>a</button>
//             <h1>{this.state.num}</h1>
//             <button onClick={this.increment}>d</button>
//         </form>
//     }
// }



// ReactDOM.render(<CounterApp />,
//     document.getElementById('root'))

