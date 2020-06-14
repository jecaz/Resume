import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
    console.log(this.state)
  }

  handleSubmit(event) {
    console.log('handleSubmit')
    alert('A name was submitted: ' + this.state.name + '\nA email was submitted: ' + this.state.email
      + '\nA subject was submitted: ' + this.state.subject + '\nA message was submitted: ' + this.state.message);
    event.preventDefault();
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      // var email = this.props.data.email;
    }
    return (
      <section id="contact">
        <div className="row section-head">
          <div style={{width: 100 + '%'}} className="two columns header-col">
            <h1 style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><span>Get In Touch.</span></h1>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            <form onSubmit={this.handleSubmit} name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} size="35" id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} size="35" id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" value={this.state.subject} onChange={(e) => this.setState({subject: e.target.value})} size="35" id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols="50" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} rows="15" id="contactMessage" name="contactMessage"></textarea>
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                </div>
              </fieldset>
            </form>
            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}<br />
                {street} <br />
                {zip} {city}, {state}<br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
