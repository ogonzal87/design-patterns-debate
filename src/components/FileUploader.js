import React from "react";
import firebase from "firebase";
import base from "../base";

class FileUploader extends React.Component {
    patternOneUploadRef = React.createRef();
    patternTwoUploadRef = React.createRef();

    state = {

    }

    goToDebate = event => {
        event.preventDefault();
        const { history } = this.props;
        const pathName = "something"; // TODO: need to figure out the routing so that it goes from file-uploader to the debate.

        // Get file
        let file1 = this.patternOneUploadRef.value.files[0];
        let file2 = this.patternTwoUploadRef.value.files[0];
        // Create storage ref
        let storageRef1 = firebase.storage().ref(`${pathName}/${file1.name}`);
        let storageRef2 = firebase.storage().ref(`${pathName}/${file2.name}`);
        // Upload file
        storageRef1.put(file1);
        storageRef2.put(file2);

        history.push(`/${pathName}`);
    }

    render() {
        return (
            <form onSubmit={this.goToDebate}>
                <div>
                    <h1>Pattern One</h1>
                    {/*<progress value="0" max="100" id="patternOneUploadRef">0%</progress>*/}
                    <input
                        ref={this.patternOneUploadRef}
                        type="file"
                        name="patternOneUploadFile" />
                </div>
                <div>
                    <h1>Pattern Two</h1>
                    {/*<progress value="0" max="100" id="patternTwoUploadRef">0%</progress>*/}
                    <input
                        ref={this.patternTwoUploadRef}
                        type="file"
                        name="patternTwoUploadFile" />
                </div>
                <button type="submit">Upload files</button>
            </form>
        )
    }
}

export default FileUploader;
