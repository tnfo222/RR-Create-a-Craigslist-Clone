function Searchbar (items) {
        return (
            <form action="/" method="get">
                <input className="searchbar" type="text" placeholder="Search Craigslist"></input>
                <button type="submit">Search</button>
            </form>
        )
  }

export default Searchbar