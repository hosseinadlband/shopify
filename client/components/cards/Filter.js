import CheckBox from './CheckBox'



const Index = ({ price, vehicle }) => {

    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
            <div className="card-header">
                <h5 className="text-center">فیلتر جستجو</h5>
            </div>
            <div className="card-body">
                <div>
                    <p>وسیله نقلیه</p>
                    <CheckBox title="اتوبوس" pressed={vehicle.bus} />
                    <CheckBox title="هواپیما" pressed={vehicle.plane} />
                    <CheckBox title="ون" pressed={vehicle.van} />
                </div>
                <hr/>
                <div className="my-2">
                    <p>هزینه سفر</p>
                    <small className="float-start">۱۰۰،۰۰۰ تومان</small>
                    <small className="float-end">۱۰۰۰،۰۰۰ تومان</small>
                    <input type="range"
                           className="form-range" />
                </div>
            </div>
        </div>
        </div>


    )
}

export default Index




