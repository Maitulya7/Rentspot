import "./filter.scss"
const Filter = () => {
  return (
    <div className="filter">
        <h1>Seach Result for <b>Ahmedabad</b></h1>
        <div className="top">
            <div className="item">
              <label htmlFor="city">Location</label>
              <input type="text" id="city" name="city" placeholder="City Location"/>
            </div>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default Filter