import Shape from ".";
import "./index.css";

export default function Design1 (props) {
    return (
        props.dsgn === "signin" ?
        <div className="dsgn">
            <div className="layer-1"><Shape shape="ellipse" /></div>
            <div className="layer-2"><Shape shape="ellipse" /><Shape shape="circle" /><Shape shape="ellipse" /></div>
            <div className="layer-3"><Shape shape="ellipse" /><Shape shape="circle" /><Shape shape="ellipse" /></div>
            <div className="layer-4"><Shape shape="ellipse" /></div>
        </div>
        :
        <div className="dsgn">
            <div className="layer-1"><Shape shape="square" /></div>
            <div className="layer-2"><Shape shape="square" /><Shape shape="circle" /><Shape shape="square" /></div>
            <div className="layer-3"><Shape shape="square" /><Shape shape="circle" /><Shape shape="square" /></div>
            <div className="layer-4"><Shape shape="square" /></div>
        </div>
    );
}
