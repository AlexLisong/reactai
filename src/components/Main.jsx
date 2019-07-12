import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    // http://127.0.0.1:5000/upload
    // fetch('http://35.183.208.30:5000/upload', {
    fetch('http://35.182.16.63:5001/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        // this.setState({ imageURL: `http://35.183.208.30:5000/${body.file}` });
        this.setState({ imageURL: `http://35.182.16.63:5001/${body.category}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>

        <p>{this.state.imageURL}</p> 
      </form>
    );
  }
}

export default Main;