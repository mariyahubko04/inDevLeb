import React from 'react';

import {getDocuments} from '../api/getDocuments';

class DocumentsUpload extends React.Component {
  state = {
    documents: [],
  }

  componentDidMount() {
    this.setState({
      documents: getDocuments,
    })
  }

  handleUpload = (event) => {
    let { files } = event.target;

    const addFile = {
      id: this.state.documents.length + 1,
      name: files[0].name,
      size: files[0].size,
      numberWords: Math.round(Math.random()*100),
    }

    this.setState({
      documents: [
        ...this.state.documents,
        addFile,
      ]
    })
  }

  handleRemove = (itemId) => {
    this.setState(prevState => ({
      documents: prevState.documents.filter(document =>
        document.id !== itemId
      )
    }))
  }

  render() {
    const { documents } = this.state;

    return (
      <div>
        <div className="main__upload">
          <h2>
            <span className="main__upload--number">1</span>
            Upload your document
          </h2>
          <span className="main__upload--info-format">(Doc, Docx, Text, PDF, Markdown)</span>
        </div>
        <div className="main__upload--btn btn btn-default btn-file">
          <i class="fas fa-cloud-upload-alt"></i>
          Upload a new file
          <input type="file" name="file" onChange={this.handleUpload} />
        </div>
        <table className="main__upload--tbl">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FILE NAME</th>
              <th scope="col">FILE SIZE</th>
              <th scope="col">NUMBER OF WORDS</th>
              <th scope="col">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <i class="far fa-list-alt"></i>
                  {document.name}
                </td>
                <td>{Math.round(document.size / 1024)}kb</td>
                <td>{document.numberWords}</td>
                <td><a
                  onClick={() => this.handleRemove(document.id)}
                  className="basket-delete"
                >
                  <i class="fas fa-trash-alt"></i>
                </a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default DocumentsUpload;
