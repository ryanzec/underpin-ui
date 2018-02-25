import PropTypes from 'prop-types';
import React from 'react';

import FileUploadDragDrop from 'src/components/FileUploadDragDrop/FileUploadDragDrop';
import FormElement from 'src/components/Form/FormElement';
import FormValidationMessages from 'src/components/Form/FormValidationMessages';

class FileUploadDragDropPage extends React.Component {
  state = {
    acceptedFiles: [],
    rejectedFiles: [],
  };

  onDrop = (accepted, rejected) => {
    const mapFilesToObjects = (file) => {
      return {
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.name,
        size: file.size,
        type: file.type,
      };
    };
    const acceptedFiles = accepted.map(mapFilesToObjects);
    const rejectedFiles = rejected.map(mapFilesToObjects);

    this.setState({
      acceptedFiles,
      rejectedFiles,
    });
  };

  render() {
    return (
      <div className="p-style-guide-file-upload-drag-drop">
        <h1>File Upload (DnD)</h1>
        <h2>Basic</h2>
        <div>
          <FileUploadDragDrop
            disableClick
            onDrop={this.onDrop}
            style={{width: '500px'}}
          />
        </div>
        <h2>Clickable</h2>
        <FormElement validation="invalid">
          <FileUploadDragDrop
            infoHoverNode="Drop file to upload"
            infoNode="Click or drop file here to upload"
            onDrop={this.onDrop}
          />
          <FormValidationMessages>Error Uploading File!</FormValidationMessages>
        </FormElement>
        <h3>Accepted</h3>
        <pre>{JSON.stringify(this.state.acceptedFiles, null, 2)}</pre>
        <h3>Rejected</h3>
        <pre>{JSON.stringify(this.state.rejectedFiles, null, 2)}</pre>
      </div>
    );
  }
}

FileUploadDragDropPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default FileUploadDragDropPage;
