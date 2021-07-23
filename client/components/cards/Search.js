import React from 'react'
import Link from 'next/link'

const Index = ({ title, price, id, destination, v }) => {

    return (
        <div className="courses-container">
            <Link href={'/tour/' + id }>
                <a>
                    <div className="course">
                        <div className="course-info">
                            <h6>{ destination }</h6>
                            <h5 className="mt-3">{ title }</h5>
                            <small className="float-start text-white btn-success btn-sm">
                                {v === 'P' ? 'هواپیما': 'اتوبوس'}
                            </small>
                        </div>
                        <div className="course-preview">
                            <p>{price} تومان</p>

                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}


export default Index