import React from 'react';
import ReactDOM from 'react-dom';
// import util from 'util';

const Modal = props => {
    //console.log('Modal props:' + props);
   // console.log("modal props:" + util.inspect(props));
    return ReactDOM.createPortal(
        <div 
            onClick={props.onDismiss}
            
            className='ui dimmer modals visible active'
        >
            <div
                volunteerselected={props.volunteerSelected}
                onClick={(e) => e.stopPropagation() }
                className="ui standard modal visible active">
                <div className='header'>{props.title}</div>
                <div className='content'>{props.content}</div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;