import React from "react";
import firebase from "firebase";

class FileUploader extends React.Component {
    patternOneUploadRef = React.createRef();
    patternTwoUploadRef = React.createRef();

    state = {
        storageRef1Name: '',
        storageRef2Name: '',
    }

    goToDebate = event => {
        event.preventDefault();
        const { history, match } = this.props;
        const pathName = match.params.id;

        // Get file
        console.log(this.patternOneUploadRef)
        let file1 = this.patternOneUploadRef.current.files[0];
        let file2 = this.patternTwoUploadRef.current.files[0];
        // Create storage ref
        let storageRef1 = firebase.storage().ref(`${pathName}/${file1.name}`);
        let storageRef2 = firebase.storage().ref(`${pathName}/${file2.name}`);
        this.setState({ storageRef1Name: file1.name });
        this.setState({ storageRef2Name: file2.name });
        // Upload file
        storageRef1.put(file1);
        storageRef2.put(file2);

        history.replace(`/debate/${pathName}`);
    }

    render() {
        return (
            <form onSubmit={this.goToDebate}>
                <div>
                    <h1>Pattern One</h1>
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
