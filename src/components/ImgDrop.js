import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { addPhoto } from '../actions';


const CLOUDINARY_UPLOAD_PRESET = 'hgdd9gxv';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/expat_journal/upload';

class ImgDrop extends React.Component {
    state = {
        img_url: '',
        uploadedFile: null
      }
      // handleAddPhoto = _ => {
      //   const { img_url } = this.state;
      //   this.props.addPhoto(localStorage.getItem('user_id'),{ img_url });
      // };
    
      onDrop = acceptedFiles => {
        console.log(acceptedFiles);
        this.setState({
          uploadedFile: acceptedFiles[0]
        })
    
        this.handleImageUpload(acceptedFiles[0]);
      }
    
      handleImageUpload = file => {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
          .field('file', file)
          .field('api_key', 882347815869688)
    
        upload.end((err, res) => {
          if (err) {
            console.error(err)
          }
    
          if (res.body.secure_url !== '') {
            this.setState({
              img_url: res.body.secure_url
            });
            console.log(res.body.secure_url);
            alert(res.body.secure_url);
          }
        });
      }
    
      render() {
        return (
          <Dropzone onDrop={this.onDrop}>
            {({getRootProps}) => (
            <div {...getRootProps()}>
              <p className='dropzone'>Drag and Drop Images Here</p>
            </div>
            )}
          </Dropzone>
        )
      }
    }
    
    const mapStateToProps = state => {
      return {
        error: state.error,
        addingPhoto: state.addingPhoto
      };
    };
    
    export default connect(mapStateToProps, { addPhoto })(ImgDrop);