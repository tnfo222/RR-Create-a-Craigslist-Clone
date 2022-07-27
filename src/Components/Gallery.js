import Posting from './Posting'

function Gallery (items) {
    return (
      <div className="gallery">
        {items.postings.map((data, i) => {
            return <Posting data={data} key={i}/>
        })}
      </div>
    )
  }

  export default Gallery