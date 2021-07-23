import Layout from '../../components/Layout'
import Card from '../../components/hotels/Card'
import axios from '../../axios'


const Index = ({data}) => {
    console.log(data)
    return (
        <Layout>
            <section className="container">
                <div className="row">
                    <Card/>
                </div>
            </section>
        </Layout>
    )
}

export default Index