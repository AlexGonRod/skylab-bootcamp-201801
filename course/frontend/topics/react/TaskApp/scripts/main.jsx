'use strict';

// let a, b, res;

// function calculate(e) {
//     e.preventDefault()

//     res = a + b

//     render()
// }

// function keepA(e){
//     a = parseFloat(e.target.value)
// }

// function keepB(e) {
//     b = parseFloat(e.target.value)
// }
// function render() {
//     ReactDOM.render(
//         <main>
//             <section>
//                 <form  onSubmit={calculate}>
//             <input type="text" onChange={keepA}/>
//             +
//             <input type="text" onChange={keepB}/>
//             <button type="submit">
//             =
//             </button>
//             <input type="text" disabled value={ res }/>
//         </form>
//      
//             </section>
//         </main>,
//         document.getElementById('root'))
// }
// render()



function HelloWorld() {
    return <h1>Hello World</h1>
}

function Hello(props) {
    return <h1>Hello, {props.name}!</h1>
}

class Calc extends React.Component {
    constructor() {
        super() // toma propiedades del padre

        this.state = {
            a: 0,
            b: 0,
            res: 0
        }
    }

    keepA = e => { // React toma this.keepA como undefined, creando una => lo direccionamos a keepA, gracias a Babel

        this.setState({ a: parseFloat(e.target.value) }) // crea un objeto a vacio
    }

    keepB = (e) => {
        this.setState({ b: parseFloat(e.target.value) })
    }

    calculate = (e) => {
        e.preventDefault()

        this.setState((prevState) => {
            return {
                res: prevState.a + prevState.b
            }
        })

    }

   

    render() {
        return <form onSubmit={this.calculate}>
            <input type="text" onChange={this.keepA} />
            +
            <input type="text" onChange={this.keepB} />
            <button type="submit">
                =
            </button>
            <input type="text" disabled value={this.state.res} />
        </form>
    }

}

function render() {
    ReactDOM.render(
        <main>
            <section>

                <HelloWorld />
                <Hello name="John" />
                <Calc />
            </section>
        </main>,
        document.getElementById('root'))
}
render()
