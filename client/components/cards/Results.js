import Search from './Search'



const Index = ({ data }) => {

    const loading_div = () => {
        return (
            <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"/>
                <div className="sk-cube sk-cube2"/>
                <div className="sk-cube sk-cube3"/>
                <div className="sk-cube sk-cube4"/>
                <div className="sk-cube sk-cube5"/>
                <div className="sk-cube sk-cube6"/>
                <div className="sk-cube sk-cube7"/>
                <div className="sk-cube sk-cube8"/>
                <div className="sk-cube sk-cube9"/>
            </div>
        )
    }

    const render_data = () => {

        return data.map((x) => {
            return (
                <Search price={x.node.price}
                        destination={x.node.origin.name + ' ' + x.node.destination.name}
                        title={x.node.title} v={x.node.vehicle}
                        id={x.node.id}
                        key={x.node.id}
                />
            )
        })
    }

    return (
        <div className="col-lg-10">
            <div className="card">
                <div className="card-header">
                    نتایج
                </div>
                <div className="card-body">
                    {render_data()}
                </div>
            </div>
        </div>
    )
}


export default Index
