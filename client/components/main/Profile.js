import { useState } from 'react'
import axios from '../../axios'
import {toast} from 'react-toastify'




const Profile = ({ toggle, user, success }) => {
    let [loading, setLoading] = useState(false)

    const logout = async () => {
        setLoading(true)
        try {
            let data = await axios.get('/auth/logout/')
            toast.success('عملیات با موفقیت انجام شد')
            toggle()
            success({logged_in: false})
        } catch (e) {
            toast.error('در انجام عملیات مشکلی پیش آمد')
            setLoading(false)

        }
    }

    return (
        <div className="modal">
            <div className="model_content" id="login">
                <h4 className="close m-2" onClick={toggle} style={{cursor: 'pointer'}}>
                    &times;
                </h4>
                <div className="login-card p-3 shadow-lg rounded px-5">
                    <div className="pt-3">
                        <h5 className="text-danger text-center">پروفایل</h5>
                    </div>

                    <div className="mt-5 text-dark">
                        <h4 className="text-center">نام: {user.name}</h4>
                    </div>
                    <div className="mt-4 text-dark">
                        <h4 className="text-center">نام کاربری: {user.username}</h4>
                    </div>
                    <div className="mt-5">
                        <button className="btn btn-sm btn-danger"
                                onClick={logout}
                                disabled={loading}>
                            خروج
                        </button>
                    </div>
                    <br/>
                    <br/>
                    FIX UI SOOOOOOOOOOOOOOOOOOON
                </div>

            </div>
        </div>
    )
}


export default Profile

