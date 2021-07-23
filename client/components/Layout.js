import Header from './main/Header'
import { Component } from 'react'
import axios from '../axios'


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.userStatus()
        this.state = {
            user: {
                logged_in: false
            }
        }
    }

    status = (user) => {
        this.setState({user})
    }

    async userStatus() {
        try {
            let data = await axios.get('/auth/user/')
            this.setState({user: {logged_in: true, ...data.data}})
        } catch {

        }
    }

    render() {
        return (
            <>
                <Header user={this.state.user} status={this.status} />
                {this.props.children}
                <footer className="footer py-3" style={{marginTop: 200, backgroundColor: '#24243e'}}>
                    <div className="container">
                        <span className="text-muted">کپی رایت ۲۰۲۱ © تمامی حقوق محفوظ است</span>
                    </div>
                </footer>
            </>
        )
    }
}




