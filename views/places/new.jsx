const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
                <div>
                    <label htmlFor="name">Place Name</label>
                    <input className = 'form-control' id='name' name = 'name' required/>
                </div>
                <div>
                     <label htmlFor="pic">Place Picture</label>
                     <input className = 'form-control' type="url" id="pic" name="pic" />
                </div>
                <div>
                     <label htmlFor="city">City</label>
                     <input className = 'form-control' type="city" id="city" name="city" />
                </div>
                <div>
                     <label htmlFor="state">State</label>
                     <input className = 'form-control' type="state" id="state" name="state" />
                </div>
                <div>
                     <label htmlFor="cuisine">Cuisine</label>
                     <input className = 'form-control' type="cuisine" id="cuisine" name="cuisine" required/>
                </div>
                <div className="form-group">
                      <label htmlFor="founded">Founded Year</label>
                      <input className="form-control" id="founded" name="founded"  type = 'number' value = {new Date().getFullYear()}/>
                </div>

                <input className = 'btn btn-primary' type = 'submit' value = 'add place'/>
            </form>
            
          </main>
        </Def>
    )
}

module.exports = new_form
