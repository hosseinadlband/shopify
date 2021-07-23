import Filter from '../components/cards/Filter'
import Results from '../components/cards/Results'
import Layout from '../components/Layout'
import axios from '../axios'
import React from 'react'

const data = {
    vehicles: {
        bus: 0,
        van: 0,
        plane: 0
    },
    minPrice: 0
}


export default class Index extends React.Component {

    constructor(props) {
        super(props)
        this.getFilters()
    }

    state = {
        data: []
    }

    static getInitialProps({query}) {
        return {query}
    }

    getFilters = (query) => {
        let data
        let q = `{allTours (start_Gte: "${new Date(this.props.query.start).toISOString()}" origin_Id: "${this.props.query.origin}" destination_Id: "${this.props.query.destination}") {edges {node {id title hotel {name} origin{name} destination{name} vehicle start price}}}}`
        if (process.browser) {
            axios.get('/api/', {params: {query: q}}).then((res) => {
                this.setState({data: res.data.data.allTours.edges})
            })
        } else {
            axios.post('/api/', {query: q}).then((res) => {
                this.setState({data: res.data.data.allTours.edges})
            })
        }
    }

    render() {
        return (
            <Layout>
                <section>
                    <div className="row mx-auto">
                        <Filter
                            vehicle={data.vehicles}
                            price={data.minPrice}
                        />
                        <Results data={this.state.data} />
                    </div>
                </section>
            </Layout>
        )
    }
}

