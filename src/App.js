import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtDescription: '',
      rdLang: 'vi',
      txtGender: 0,
      chkbStatus: true
    }
  }

  onHandleChange = (event) => {
    console.log(event.target.value)
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (

      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">

                <form onSubmit={this.onHandleSubmit}>

                  {/* Username */}
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name='txtUsername'
                      placeholder="Enter Username"
                      onChange={this.onHandleChange}
                    />
                  </div>

                  {/* Password */}
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name='txtPassword'
                      placeholder="Enter Password"
                      onChange={this.onHandleChange}
                    />
                  </div>

                  {/* TextArea */}
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      name="txtDescription"
                      className="form-control"
                      rows="3"
                      required="required"
                      placeholder="Enter Description"
                      onChange={this.onHandleChange}
                    ></textarea>
                  </div>

                  {/* Select */}
                  <div className="form-group">
                    <label>Gender</label>
                    <select className="form-control" name="txtGender" onChange={this.onHandleChange} value={this.state.txtGender} required="required">
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                    </select>
                  </div>

                  {/* Radio */}
                  <div className="form-group">
                    <label>Language</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="en"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang === "en"}
                        />
                        English
                    </label><br />
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="vi"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang === "vi"}
                        />
                        Vietnamese
                    </label>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="checkbox">
                    <label>
                      <input 
                      type="checkbox" 
                      value={true} 
                      onChange={this.onHandleChange} 
                      name="chkbStatus"
                      checked={this.state.chkbStatus === true} />
                      Active
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                  <button type="reset" className="btn btn-default">Reset</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
