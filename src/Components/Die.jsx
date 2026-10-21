export default function Die(props) {
  const heldStyle = {
    backgroundColor: props.isHeld?  "green" : null
  }



  return (
    <>

        <div className="die-container">
          <button  aria-label="Click die current value" style={heldStyle} onClick={()=>props.handleClick(props.id)} className="die-btn"> {props.value} </button>
        </div>

    </>
  )
}
