import Header from '../comp/Header'
import Head from 'next/head'
import Sidebar from '../comp/Sidebar'
import MainBody from '../comp/MainBody'

const Index = () => {
    return (
        <div className="main-w">
            <Head>
                <link rel="stylesheet" href="../static/main.css" />
            </Head>
            <Header />
            <MainBody />
            <Sidebar />
            <style jsx>
                {`
                .main-w{
                    display:grid;
                    grid-template-columns: 2fr 1fr;
                }
                `}
            </style>
        </div>
    )
}

export default Index