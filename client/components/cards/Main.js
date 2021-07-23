import Link from 'next/link'


const Card = ({ title, link, description, image }) => {
    return (
        <div className="card card-custom bg-white border-white border-0">
            <Link href={link}>
                <a>
                    <div className="card-custom-img"
                         style={{backgroundImage: `url("${image}")`}}/>
                    <div className="card-custom-avatar">
                        <img className="img-fluid"
                             src="/takhfif.png"
                             alt="Avatar"/>
                    </div>
                    <div className="card-body" style={{overflowY: 'auto'}}>
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Card
