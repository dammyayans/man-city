import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formField";
import { validate } from "../../ui/misc";
import { firebasePromotions } from "../../../firebase";

export default class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };
  updateForm = element => {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };
    newElement.value = element.e.target.value;
    let valiData = validate(newElement);
    // console.log(valiData);
    newElement.valid = valiData[0];
    newElement.validationMessage = valiData[1];
    newFormdata[element.id] = newElement;
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };
  resetFormSuccess(type) {
    const newFormdata = { ...this.state.formdata };
    for (let key in newFormdata) {
      newFormdata[key].value = "";
      newFormdata[key].valid = false;
      newFormdata[key].validationMessage = "";
    }
    this.setState({
      formError: false,
      formdata: newFormdata,
      formSuccess: type ? "Congratulations" : "already on the database"
    });
    console.log(this.state.formSuccess);
    this.clearSuccessMessage();
  }
  clearSuccessMessage() {
    setTimeout(() => {
      this.setState({
        formSuccess: ""
      });
    }, 2000);
  }

  submitForm(e) {
    e.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            //means it's not on the database
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
      //   this.resetFormSuccess();
    } else {
      this.setState({
        formError: true
      });
    }
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <div className="enroll_title">Enter your Email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">Something is wrong, try again</div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={e => this.submitForm(e)}>Enroll</button>
              <div className="enroll_discl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, blanditiis veritatis aliquid exercitationem vitae atque
                aliquam molestiae sit ea voluptates placeat assumenda, id illo
                quaerat fugit nisi fuga architecto consequatur!
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
