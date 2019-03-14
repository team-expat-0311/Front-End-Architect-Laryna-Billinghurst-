import React from 'react';
import { connect } from "react-redux";
import { submitEdit } from "../actions";

class UpdatePhotoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            editedImg_url: "",
            editedLocation: "",
            editedDescription: "",
            update: false
          };
        }

        updatePhoto = event => {
            event.preventDefault();
            this.setState({ update: !this.state.update });
          };
          inputEdit = event => {
            this.setState({ [event.target.name]: event.target.value });
          };
          submitEdit = event => {
            event.preventDefault();
            let editedPhotos = {
              img_url: this.state.editedImg_url,
              location: this.state.editedLocation,
              description: this.state.editedDescription
            };
            this.props.submitEdit(editedPhotos, this.props.photo.id);
            this.setState({ editedImg_url: "", editedLocation: "", editedDescription: "" });
          };
        
          render() {
            console.log("this.props: ", this.props);
            return (
              <div>
                {this.state.update ? (
                  <form>
                    <input
                      onChange={this.inputEdit}
                      name="editedImg_url"
                      placeholder="edit image url"
                      value={this.state.editedImg_url}
                    />
                    <input
                      onChange={this.inputEdit}
                      name="editedLocation"
                      placeholder="edit location"
                      value={this.state.editedLocation}
                    />
                    <input
                      onChange={this.inputEdit}
                      name="editedDescription"
                      placeholder="edit description"
                      value={this.state.editedDescription}
                    />
                    <button onClick={this.submitEdit}>Confirm Edit</button>
                  </form>
                ) : null}
                <button onClick={this.updatePhoto}>Update</button>
              </div>
            );
          }
        }
        
        const mapStateToProps = state => {
          return {
            all: state.all
          };
        };
        
        export default connect(
          mapStateToProps,
          { submitEdit }
        )(UpdatePhotoForm);



{/* <form>
<input placeholder={props.photo.img_url} />
<input placeholder={props.photo.location} />
<input placeholder={props.photo.description} />
</form> */}