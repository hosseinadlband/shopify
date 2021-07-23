import Layout from '../components/Layout'
import Card from '../components/cards/Main'
import {ToastContainer} from 'react-toastify'
import Search from '../components/query/search'



const Index = () => {

    return (
        <Layout>
            <ToastContainer

                rtl
            />
            <section className="my-4">
                <div className="p-5 mb-4 rounded-3 bg-hotel">
                    <div className="container-fluid" style={{marginTop: 200}}>
                        <h4 className="display-6 fw-bold text-center" style={{color: '#222'}}
                        >بیش از ۱۰۰ تور در دسترس</h4>
                        <p className="fs-4 text-center"
                           style={{color: '#222'}}>سرویس پیشرفته ما بهترین تجربه را برای شما رقم خواهد زد</p>
                    </div>
                </div>
            </section>
            <Search />
            <section className="container mt-5">
                <hr/>
                <h3 className="text-center mt-4">تور های گردشگری VIP </h3>
                <div className="row">
                    <div className="col-md-6 col-lg-4 pb-3 mt-3">
                        <Card image="/hotels/img.png"
                              title="هتل ایران" link="/test"
                              description="هتل ایران یکی از بهترین هتل های شیراز می باشد" />
                    </div>
                    <div className="col-md-6 col-lg-4 pb-3 mt-3">
                        <Card image="/hotels/img.png"
                              title="هتل ایران" link="/test"
                              description="هتل ایران یکی از بهترین هتل های شیراز می باشد" />
                    </div>
                    <div className="col-md-6 col-lg-4 pb-3 mt-3">
                        <Card image="/hotels/img.png"
                              title="هتل ایران" link="/test"
                              description="هتل ایران یکی از بهترین هتل های شیراز می باشد" />
                    </div>
                </div>
            </section>


            <section className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">نکات خرید</h4>
                    </div>
                    <div className="card-body" style={{backgroundColor: '#f9f9f9'}}>

                        <p className="mx-2">
                            تمامی محصولات ما دارای پشتیبانی می باشد. در صورت بروز هرگونه مشکل می توانید با پشتیبانی ما تماس بگیرید.
                            هرگونه خرید از سایت قابل بازگشت و عودت نمی باشد لذا از خرید خود مطمعن شوید
                            <br/>
                            تمامی قیمت ها ثابت هستند. پس از اتمام زمان ثبت نام تور طبق قرارداد قابلیت بیشتر کردن آن نمی باشد
                        </p>
                        <div className="float-start m-5">
                            <small className="small">با تشکر. خدمات شرکت گردشگری</small>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}



// Index.getInitialProps = async () => {
//     axios.get('')
//     return;
// }

export default Index



