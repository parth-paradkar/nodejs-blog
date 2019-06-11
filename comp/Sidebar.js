import Posts from './Posts'

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Posts />

                <style jsx>
                    {`
                    .sidebar{
                        background:#fff;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Sidebar
