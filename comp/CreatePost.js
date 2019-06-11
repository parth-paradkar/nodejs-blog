import Axios from "axios";

export class CreatePost extends React.Component {

    state= {
        title:'',
        author: '',
        content: ''
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
      }

      handleAuthorChange = e => {
        this.setState({ author: e.target.value });
      }

      handleContentChange = e => {
        this.setState({ content: e.target.value });
      }

      handleSubmit = e => {
          e.preventDefault()

          const newPost = {
              title: this.state.title,
              author: this.state.author,
              content: this.state.content
          }

          Axios.post('/api/create', newPost).then( (res => {
              console.log(res)
          }))
      }

    render() {
        return (
            <div className="create-p">
                <h1>Create New Post</h1>
                <form onSubmit={this.handleSubmit} className="form-w">
                    <input onChange={this.handleTitleChange} name="title" type="text" placeholder=" Post Title" />
                    <input onChange={this.handleAuthorChange} name="author" type="text" placeholder="Author's Username" />
                    <br />
                    <textarea onChange={this.handleContentChange} className="text-a" name="content" placeholder="Write your post Content here" />
                    <button type="submit" name="submit"> Submit </button>
                </form>
                <style jsx>
                    {`
                    .create-p{
                        margin-top: 50px;
                        background: #fff;
                        width: 70vw;
                        position:relative;
                        left:50%;
                        transform:translateX(-50%);
                        font-family:Open Sans;
                    }
                    h1, h2, h3{
                        font-family: Open Sans;
                    }

                    .form-w{
                        margin: 0 0 30px 0;
                    }

                    input{
                        padding: 0.4em 1em;
                        box-sizing: border-box;
                        width:47%;
                        font-family: Open Sans;
                        font-weight:600;
                        font-size:1.2em;
                        border-radius:6px;
                        border: 2px solid #f6f6f6;
                    }
                    input::placeholder{
                        color:#666;
                    }
                    input:last-of-type{
                        float:right;
                    }

                    input:focus{
                        outline:none;
                        border: 2px solid #999;
                    }

                    .text-a{
                        width:100%;
                        box-sizing:border-box;
                        border: 3px solid #999;
                        border-radius: 10px;
                        margin-top:30px;
                        padding: 1em;
                        height: 500px;
                        font-family:Open Sans;
                        resize: none;
                    }

                    .text-a:focus{
                        outline:none;
                        border: 3px solid #444;
                    }

                    button{
                        padding: 0.4em 1em;
                        color:#fff;
                        border-radius: 8px;
                        background:#334;
                        font-family: Open Sans;
                        font-weight: 600;
                        border:0;
                        text-transform: uppercase;
                        font-size:1.3em;
                    }

                    button:hover{
                        background:#000;
                    }
                    button:focus{
                        outline:none;
                    }

                    `}
                </style>
            </div>
        )
    }
}

export default CreatePost
