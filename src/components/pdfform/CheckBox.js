import React from 'react';

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            check: this.props.check
        }
    }

    inputChange = (event, limit) => {
        if (limit) {
            event.target.value = event.target.value.substring(0, limit - 1)
        };
        this.setState({
            check: !this.state.check
        });
        //this.props.form.additionalProperties[0].accNumber = this.state.accountNumber
    }

    render() {
        const marg = `checkbox-div ${(this.props.page4 || this.props.reducedMargin) ? 'mr-1' : 'mr-3'}`;

        return (
            <div className="d-flex flex-row align-items-center">
                {this.props.label &&  <label className="mr-1">YES</label>}
                <div className={marg} onClick={this.inputChange}>
                    {this.state.check &&
                        <div className="checkbox-div-checked">
                        </div>
                    }
                </div>
                {this.props.label &&  <label className="mr-1">NO</label>}

                <div className="checkbox-div mr-4" onClick={this.inputChange}>
                    {!this.state.check &&
                        <div className="checkbox-div-checked">
                        </div>
                    }
                </div>
            </div>
        );
    }

}

export default CheckBox;