import "./Card.css"

/// A React component that shows data in a card-like container.
export default function Card({ name, description, color, selected=false, onClick=null }) {
    
    const avatarStyle = {
        backgroundColor: color
    }

    return (<div className={`card ${selected ? "selected" : ""}`} onClick={onClick}>
        <div className="avatar" style={avatarStyle}>
        </div>
        <div className="text">
            <div className="name">{ name }</div>
            <div className="description">{ description }</div>
        </div>
    </div>)
}