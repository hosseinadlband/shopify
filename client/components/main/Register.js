import axios from '../../axios'




const Login = ({ toggle }) => {

    return (
        <div className="modal">
            <div className="model_content" id="login">
                <h4 className="close m-2" onClick={toggle} style={{cursor: 'pointer'}}>
                    &times;
                </h4>
                <div className="login-card p-3 shadow-lg rounded px-5">
                    <div className="pt-3">
                        <h5 className="text-danger text-center">گردشگری | ثبت نام</h5>
                    </div>

                    <form className="mt-5" style={{width: 200}}>
                        <div className="form-group">
                            <input type="email"
                                   className="form-control form-control-sm"
                                   placeholder="ایمیل" />
                        </div>

                        <div className="form-group">
                            <input type="password"
                                   className="form-control form-control-sm"
                                   placeholder="پسورد" />
                        </div>

                        <div className="form-group">
                            <input type="password"
                                   className="form-control form-control-sm"
                                   placeholder="تکرار پسورد" />
                        </div>


                        <div className="mt-2">
                            <a className="text-center small" href='#'>
                                با قوانین موافقم
                            </a>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-sm btn-danger">
                                ثبت نام
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}



export default Login



