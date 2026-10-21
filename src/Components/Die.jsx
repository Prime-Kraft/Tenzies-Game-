export default function Die(props) {
  const heldStyle = {
    backgroundColor: props.isHeld?  "green" : null
  }



  return (
    <>

        <div className="die-container">
        <button
          aria-pressed={props.isHeld}
          aria-label={`Die with the value ${props.value},
            ${props.isHeld? "Held": "Not held"}`} style={heldStyle} onClick={() => props.handleClick(props.id)} className="die-btn"> {props.value} </button>
        </div>

    </>
  )
}
