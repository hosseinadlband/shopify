import AsyncSelect from 'react-select/async'
import { DatePicker } from 'jalali-react-datepicker'
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {trace} from 'next/dist/telemetry/trace'




let State = {
    inputValue: '',
};

const filterCities = async (inputValue) => {
    if (inputValue.length < 1) {
        return [{value: null, label: 'برای جستجو یک حرف را وارد کنید', isDisabled: true}]
    }
    let data = await axios.get(
        `http://localhost:8000/api/?query={allCities(name_Istartswith:"${inputValue}"){edges{node{id name}}}}`)

    return data.data.data.allCities.edges.map((x) => {
        return {
            label: x.node.name,
            value: x.node.id,
        }
    })
};

const promiseOptions = inputValue =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(filterCities(inputValue));
        }, 1000);
    });



class Search extends React.Component {
    state = { inputValue: '' }
    start = new Date()
    days
    origin
    destination
    router

    constructor(props) {
        super(props);
        this.router = props.router
    }

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\w/g, '')
        this.setState({ inputValue })
        return inputValue
    };

    submit = () => {
        if (!this.origin || !this.destination) {
            this.fields()
            return
        }
        this.router.push({
            pathname: '/search',
            query: {
                origin: this.origin,
                destination: this.destination,
                start: this.start,
                days: this.days
            }
        })
    }
    fields = () => toast.error('لطفا مبدا و مقصد را مشخص کنید')

    render() {
        return (
            <div className="container py-4 rounded"
                 style={{marginTop: -65, backgroundColor: '#d29a35ee'}}>
                <div className="row">
                    <div className="col-lg-3 text-dark">
                        <small>
                            مبدا
                        </small>
                        <AsyncSelect
                            cacheOptions
                            loadOptions={promiseOptions}
                            defaultOptions
                            onChange={(e) => this.origin = e.value}
                            placeholder="شهر را انتخاب کنید"
                        />
                    </div>
                    <div className="col-lg-3 text-dark">
                        <small>
                            مقصد
                        </small>
                        <AsyncSelect
                            cacheOptions
                            loadOptions={promiseOptions}
                            onChange={(e) => this.destination = e.value}
                            defaultOptions
                            placeholder="شهر را انتخاب کنید"
                        />
                    </div>
                    <div className="col-lg-2">
                        <DatePicker className="form-control"
                                    value="1400/01/08"
                                    timePicker={false}
                                    onClickSubmitButton={(e) => this.start = e.value._i.slice(0, -3)}
                                    label="زمان شروع" />
                    </div>
                    <div className="col-lg-1">
                        <small>
                            تعداد روز
                        </small>
                        <input type="number" id="start" onChange={(e) => this.days = e.target.value}
                               className="form-control" placeholder="2"/>
                    </div>
                    <div className="col-lg-1 pt-4">
                        <button onClick={this.submit}
                                className="btn btn-success ">جستجو</button>
                    </div>
                </div>
            </div>
        )
    }
}

let Index = () => {
    return (
        <Search router={useRouter()} />
    )
}

export default Index
