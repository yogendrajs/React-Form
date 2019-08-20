import React, { Component } from 'react'
import './Form.css';
import swal from 'sweetalert';

console.log(React.version);

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             pass: '',
        }
        this.nameData = this.nameData.bind(this);
        this.emailData = this.emailData.bind(this);
        this.submitData = this.submitData.bind(this);
        this.pass = this.pass.bind(this);
        this.reqpass = this.reqpass.bind(this);
    }

    nameData(event){
        // event.preventDefault();
        this.setState({
            name: event.target.value,
        })
    }

    emailData(event){
        // event.preventDefault();
        // console.log(event.target.value);
        this.setState({
            email: event.target.value,
        })
    }
    
    pass(event){
        this.setState({
            pass: event.target.value,
        })
    }

    submitData(event){
        event.preventDefault(); // preventing it from reloading the same page while pressing submit button.
        let count = 0;
        let {name, email, pass} = this.state;

        let passCondition = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        
        // for checking the validation of the name
        if (name.length >= 5){
            document.getElementById('reqname').style.display = 'none';
            count++;
        }else {
            document.getElementById('reqname').style.display = 'block';
        }

        // for checking the validation of email
        if (email.includes('@') && email.includes('.')){
            document.getElementById('reqemail').style.display = 'none';
            count++;
        }else {
            document.getElementById('reqemail').style.display = 'block';
            // document.getElementById('reqpass').style.display = 'block';
        }

        // for checking the validation of password
        if (pass.match(passCondition)){
            document.getElementById('reqpass').style.display = 'none';
            count++;
        }
        else {
            document.getElementById('reqpass').style.display = 'block';
        }

        // if all the three are correct!
        if (count === 3){
            // let {name, email, pass} = this.state;
            swal("You made it!", "Thanks for submission!", "success");
            // window.location.reload();
            console.log(this.state)
            this.setState({
                name: '',
                email: '',
                pass: '',
            })
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
                            <input type="text" className="input-text" placeholder="Your Name" onChange={this.nameData}/>
                            <p id="reqname">Your name should be atleast 5 letters long.</p>
                        </div>
                        <div className="form-row">
                            <input type="text" className="input-text" placeholder="Your Email" onChange={this.emailData}/>
                            <p id="reqemail">Please input correct Email.</p>
                        </div>
                        <div className="form-row">
                            <input type="password" className="input-text" placeholder="Your Password" onChange={this.pass}/>
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
