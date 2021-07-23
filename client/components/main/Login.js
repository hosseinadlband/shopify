import axios from '../../axios'
import { useState } from 'react'
import {toast} from 'react-toastify'


const Login = ({ toggle, success }) => {

    const Submit = async (e) => {
        e.preventDefault()

        setLoading(true)
        let formData = new FormData(e.target)
        try {
            let data = await axios.post('/auth/login/', formData)
            toggle()
            success({logged_in: true, ...data.data})
        } catch (e) {
            toast.error('اطلاعات وارد شده با رکورد ما مطبوق نبود')
            setLoading(false)
        }
    }
    let [loading, setLoading] = useState(false)

    return (
        <div className="modal">
            <div className="model_content" id="login">
                <h4 className="close m-2" onClick={toggle} style={{cursor: 'pointer'}}>
                    &times;
                </h4>
                <div className="login-card p-3 shadow-lg rounded px-5">
                    <div className="pt-3">
                        <h5 className="text-danger text-center">گردشگری | ورود</h5>
                    </div>

                    <form className="mt-5" style={{width: 200}} onSubmit={Submit}>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control form-control-sm"
                                   name="username"
                                   placeholder="شماره تلفن"
                                   required
                            />
                        </div>

                        <div className="form-group">
                            <input type="password"
                                   name="password"
                                   className="form-control form-control-sm"
                                   placeholder="پسورد"
                                   required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-check-label text-dark mx-2 small"
                                   htmlFor="rememberCheckBox">مرا بخاطر بسپار</label>
                            <input type="checkbox"
                                   name="remember"
                                   className="form-check-input"
                            />
                        </div>

                        <div className="mt-5">
                            <button className="btn btn-sm btn-danger"
                                    disabled={loading}>
                                ورود
                            </button>
                        </div>

                        <div className="text-center mt-2 small">
                            <a href="#">رمز خود را فراموش کردید؟</a>
                        </div>

                        <div className="mt-5">
                            <p className="text-center small">
                                اکانت ندارید؟
                                <a href="#"> یک اکانت بسازید</a>
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}



export default Login



