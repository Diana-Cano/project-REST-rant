const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>Show Page</h1>
            <div className="media">
              <img className="d-flex mr-3" src={data.place.pic} alt="cuisine image"/>
                <div className="media-body">
              <h5 className="mt-0 font-weight-bold">{data.place.name}</h5>
               Is located in {data.place.city}, {data.place.state}! At this restaurant {data.place.cuisines} cuisine is offered.
                </div>
            </div>
            <h5>rating</h5>
            <p>not yet rated!</p>
            <a href={`/places/${data.id}/edit`}className="btn btn-warning"> 
              Edit
            </a>  
            <form method = 'POST' action = {`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>     
            <br></br>
            <h5>Comments</h5>
          </main>
        </Def>
    )
}

module.exports = show
