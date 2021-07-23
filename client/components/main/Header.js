import Link from 'next/link'
import { useState } from 'react'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'


const Header = ({ user, status }) => {
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [profile, setProfile] = useState(false)

    const showRegister = () => setRegister(!register)
    const showLogin = () => setLogin(!login)

    const showProfile = () => setProfile(!profile)

    const userStatus = () => {
        if (user.logged_in) {
            return (
                <>
                    <button type="button" onClick={showProfile}
                            className="btn btn-circle btn-success me-4">پروفایل</button>
                </>
            )
        }
        return (
            <>
                <button type="button" onClick={showLogin}
                        className="btn btn-outline-light mx-2">ورود</button>
                <button type="button" onClick={showRegister}
                        className="btn btn-warning">ثبت نام</button>
            </>
        )
    }

    return (
        <>
            {login ? <Login toggle={showLogin} success={status} />: null}
            {register ? <Register toggle={showRegister} />: null }
            {profile ? <Profile toggle={showProfile} user={user} success={status} />: null}
            <header className="p-4 text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center
                         justify-content-center justify-content-lg-start">
                        <Link
                            href="/">
                            <a className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none col-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                     fill="currentColor" className="bi bi-archive-fill"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                                </svg>
                            </a>
                        </Link>

                        <ul className="nav col-12 col-lg-auto m-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <Link href="/movies/">
                                    <a className="nav-link px-2 text-white">گردشگری</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/">
                                    <a className="nav-link px-2 text-white">
                                        شهر
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/premium/">
                                    <a className="nav-link px-2 text-white">
                                        تور
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/rankings/">
                                    <a className="nav-link px-2 text-white">
                                        مشهور ترین
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/hotels/">
                                    <a className="nav-link px-2 text-white">
                                        هتل ها
                                        <span className="p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="16" height="16" fill="currentColor"
                                         className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                    </svg>
                                </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search"
                                   className="form-control form-control-dark"
                                   placeholder="جستجو..."/>
                        </form>

                        <div className="text-end">
                            { userStatus() }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header

