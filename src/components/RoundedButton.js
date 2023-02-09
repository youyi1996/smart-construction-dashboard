import "./RoundedButton.css"
import 'bootstrap-icons/font/bootstrap-icons.css'


/// Button with custom color and rounded border.
export function RoundedButton({children, icon=null, type="primary", onClick=null}) {

    function IconBlock() {
        if (icon) {
            return <i className={`${icon} icon`}></i>
        }
    }

    return (
        <button className={`rounded-button ${type}`} onClick={onClick}>
            <IconBlock></IconBlock>
            <div>{ children }</div>
        </button>
    );
}