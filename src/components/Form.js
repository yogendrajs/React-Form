import React, { Component } from 'react'
import './Form.css';
import swal from 'sweetalert';

console.log(React.version);

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: false,
             email: false,
             pass: false,
        }

        this.eventHandler = this.eventHandler.bind(this);
        this.submitData = this.submitData.bind(this);
        this.reqpass = this.reqpass.bind(this);
    }

    eventHandler(event){

        let {name, value} = event.target;
        let passCondition = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        switch(name){
            case 'namedata':
                let data1 = value.length >= 5 ? (document.getElementById('reqname').style.display = 'none', this.setState({name: false})) : (document.getElementById('reqname').style.display = 'block', this.setState({name: true}));
                console.log(data1);
                break;

            case 'emaildata':
                let data2 = (value.includes('@') && value.includes('.')) ? (document.getElementById('reqemail').style.display = 'none', this.setState({email: false})) : (document.getElementById('reqemail').style.display = 'block', this.setState({email: true}));
                console.log(data2);
                break;

            case 'passdata':
                let data3 = (value.match(passCondition)) ? (document.getElementById('reqpass').style.display = 'none', this.setState({pass: false})) : (document.getElementById('reqpass').style.display = 'block', this.setState({pass: true}));
                console.log(data3);
                break;
            default: console.log('done');
        }
    }


    submitData(event){
        console.log(event.target)
        event.preventDefault(); // preventing it from reloading the same page while pressing submit button.
        const {name, email, pass} = this.state;
        if (name === false && email === false && pass === false){
            swal("You made it!", "Thanks for submission!", "success");
        }
    }

    reqpass(){
        return 'Your password should be 6 to 15 characters long which contain atleast one capital letter, one special character, numeric digits and first character must be a letter';
    }

    render() {
        return (
            <div className="page-content">
                <div className="form-v5-content">
                    <form className="form-detail" onSubmit={this.submitData}>
                        <h2>React Submission Form</h2>
                        <div className="form-row">
                            <input type="text" className="input-text" placeholder="Your Name" name="namedata" onChange={this.eventHandler}/>
                            <p id="reqname">Your name should be atleast 5 letters long.</p>
                        </div>
                        <div className="form-row">
                            <input type="text" className="input-text" placeholder="Your Email" name="emaildata" onChange={this.eventHandler}/>
                            <p id="reqemail">Please input correct Email.</p>
                        </div>
                        <div className="form-row">
                            <input type="password" className="input-text" placeholder="Your Password" name="passdata" onChange={this.eventHandler}/>
                            <p id="reqpass">{this.reqpass()}</p>
                        </div>
                        <div className="form-row-last">
                            <input type="submit" name="register" className="register" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;
