import React from 'react';
import Dropzone from 'react-dropzone';

class ImgDrop extends React.Component {
    render() {
        return (
            <div>
                <Dropzone>Drag/Drop Image Here</Dropzone>
            </div>
        );
    }
}

export default ImgDrop;