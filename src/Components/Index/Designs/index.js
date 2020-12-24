import "./index.css";


export default function Shape (props) {
    return (
        <div 
            className="shape"
            style={{
                background: props.shape === "circle" ? "#009BD9" : "#01D9AD",
                borderRadius: props.shape === "square" ? `${window.innerWidth > 600 ? 20 : 12}px` : props.shape === "ellipse" ? `0px ${window.innerWidth > 600 ? 65.5 : 20}px` : "100%"
            }}
        >
            {/* {console.log(window.innerWidth)} */}
        </div>
    );
}
