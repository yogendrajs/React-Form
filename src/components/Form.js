import React, { Component } from 'react'
import './Form.css';

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
        
        // document.getElementById('wholeform').style.display = 'none';
        // document.getElementById('showname').style.display = 'block';
        // alert(this.state.email)
        // this.setState({
        //     name: this.nameData(),
        // })

        let {state} = this;
        let {name, email, pass} = state;

        let passCondition = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        
        if (name.length >= 5){
            document.getElementById('reqname').style.display = 'none';

            if (email.includes('@') && email.includes('.')){
                document.getElementById('reqemail').style.display = 'none';

                if (pass.match(passCondition)){
                    document.getElementById('reqpass').style.display = 'none';

                    alert('Thanks for submission :)');
                    window.location.reload();
                }
                else {
                    document.getElementById('reqpass').style.display = 'block';
                }
            }else {
                document.getElementById('reqemail').style.display = 'block';
            }
        }else {
            document.getElementById('reqname').style.display = 'block';
        }
    }

    reqpass(){
        return 'Your password should be 7 to 15 characters long which contain atleast one capital letter, one special character, numeric digits and first character must be a letter';
    }

    render() {
        return (
            <div>
                <h2>This is the React Form</h2>

                <form onSubmit={this.submitData} >
                    Name: <input type="text" required="" onChange={this.nameData}/><br></br>
                    <p id="reqname">Your name should be atleast 5 letters long.</p>

                    Email: <input type="text" required="" onChange={this.emailData}/><br></br>
                    <p id="reqemail">Please input correct Email.</p>

                    Password: <input type="text" required="" onChange={this.pass}/><br></br>
                    <p id="reqpass">{this.reqpass()}</p>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
