import React from "react";
import firebase from "firebase";
import base from "../base";


class FileUploader extends React.Component {
    patternOneUploadRef = React.createRef();
    patternTwoUploadRef = React.createRef();

    state = {

    }

    goToDebate(event) {
        const { history } = this.props;
        event.preventDefault();
        const pathName = history.location.pathname;
        history.push(`/debate/${pathName}/files-upload`);

        // Get file
        let file = event.target.files[0];
        // Create storage ref
        let storageRef = firebase.storage().ref(`${pathName}/${file.name}`)
        // Upload file
        let task = storageRef.put(file);
        // Update the loader
        task.on("state_changed",
            function progress(snapshot) {
                let percentage = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
                this.patternOneUploadRef.value = percentage;
            },
            function error() {

            },

            function complete() {

            }
        )
    }

    render() {
        return (
            <div>
                <h1>Pattern One</h1>
                <progress value="0" max="100" id="patternOneUploadRef">0%</progress>
                <input

                    ref={this.patternOneUploadRef}
                    type="file"
                    name="patternOneUploadFile"
                    id="patternOneUploadFile" />
            </div>
        )
    }
}

export default FileUploader;