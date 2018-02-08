'use strict'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            tasks: [{
                status: {
                    todo: false,
                    done: false
                }
            }]
        }
    }

    render() {
        return
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist not-done">
                        <h1>Todos</h1>
                        <input type="text" className="form-control add-todo" placeholder="Add todo" />
                        <button id="checkAll" className="btn btn-success">Mark all as done</button>

                       
                        <ul id="sortable" className="list-unstyled">
                            

                        </ul>

                    </div>
                </div>

            </div>
        </div>

    }
}


ReactDOM.render(<App />, document.getElementById('root'))