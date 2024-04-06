import { airportNames, locations, services } from "./data"
  
  // Aiports names / travel routes 
  const airports = airportNames.map((destination => {
    return <ul key={destination.id} className="text-sm">
    <div>
       <div className="pb-6 pt-3 pl-5">
         <a href="" className="nav-links link">{destination.name}</a>
      </div>
    </div>
 </ul>
  }))

  // Locations
  const location = locations.map((destination => {
    return <ul key={destination.id} className="text-sm">
    <div>
       <div className="pl-5">
         <a href="" className="nav-links">{destination.name}</a>
      </div>
    </div>
 </ul>
  }))

   // Services
   const service = services.map((destination => {
    return <ul key={destination.id} className="text-sm">
    <div>
       <div className="pl-5">
         <a href="" className="nav-links">{destination.name}</a>
      </div>
    </div>
 </ul>
  }))

  export { airports, location, service }