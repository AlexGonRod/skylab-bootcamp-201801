'use strict';

let a, b, res;

function calculate(e) {
    e.preventDefault()

    res = a + b

    render()
}

function keepA(e){
    a = parseFloat(e.target.value)
}

function keepB(e) {
    b = parseFloat(e.target.value)
}

function render(){
ReactDOM.render(
    <main>
    <section>
        <form  onSubmit={calculate}>
            <input type="text" onChange={keepA}/>
            +
            <input type="text" onChange={keepB}/>
            <button type="submit">
            =
            </button>
            <input type="text" disabled value={ res }/>
        </form>
    </section>
    </main>,
    document.getElementById('root'))
}
 render()
