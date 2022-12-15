const React = require('react')
const Def = require('../default.jsx')

function edit_form ({place, id}) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${place.id}?_method=PUT`}>
                <div className ='row'>
                    <div className = "form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input className = 'form-control' id='name' name = 'name' value = {place.name}required/>
                    </div>
                <div className="form-group col-sm-6">
                     <label htmlFor="pic">Place Picture</label>
                     <input className = 'form-control' type="pic" id="pic" name="pic" value = {place.pic} />
                </div>
                </div>
                <div>
                     <label htmlFor="city">City</label>
                     <input className = 'form-control' type="city" id="city" name="city" value={place.city} />
                </div>
                <div>
                     <label htmlFor="state">State</label>
                     <input className = 'form-control' type="state" id="state" name="state" value = {place.state} />
                </div>
                <div className="form-group col-sm-4">
                     <label htmlFor="founded">Founded</label>
                      <input className="form-control"  id="founded" name="founded"  value={place.founded}  />
                </div>
                <div>
                     <label htmlFor="cuisine">Cuisine</label>
                     <input className = 'form-control' type="cuisine" id="cuisine" name="cuisine" value={place.cuisines}required/>
                </div>
                <input className = 'btn btn-primary' type = 'submit' value = 'Update Place'/>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form

