import React from 'react';

export default class StandardModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen,
        }
    };

    render() {
        return(
            <div 
            className={'modal-page-dimmer' 
            + this.props.background && this.props.background 
            + this.props.color && this.props.color } 
            >
            {this.state.isOpen &&
                <div className='modal-content'>
                    <h2>{this.props.title}</h2>
                    <p>
                        {this.props.subtitle && this.props.subtitle}
                        <br/>
                        {this.props.content}
                    </p>
                    <span className='modal-actions'>
                        <button 
                            type='button'
                            onClick={e => {this.props.handleCancel(e)}}
                        >
                            {this.props.cancel}
                        </button>
                        <button 
                            type='button'
                            onClick={e => {this.props.handleConfirm(e)}}
                        >
                            {this.props.confirm}
                        </button>
                    </span>
                </div>
            }
            </div>
        );
    }
}