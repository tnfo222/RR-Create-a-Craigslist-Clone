function Posting (items) {
    return(
        <div className="posting">
            <h2>{items.data.title}</h2>
            <p>{items.data.description}</p>
            <h2>{items.data.price}</h2>
            <img src={items.data.imageURL} alt={items.data.title}></img>
        </div>
    )
}

export default Posting