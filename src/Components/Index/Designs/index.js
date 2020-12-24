import "./index.css";

export default function Shape (props) {
    return (
        <div 
            className="shape"
            style={{
                background: props.shape === "square" || props.shape === "ellipse" ? "#01D9AD" : "#009BD9",
                borderRadius: props.shape === "square" ? "20px" : props.shape === "ellipse" ? "0px 65.5px" : "100px"
            }}
        >
            {/*  */}
        </div>
    );
}
