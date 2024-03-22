import { Potatos } from '../data'
const Potato = () => {
    return (
        <div className='bg-warning'>
        <div className='container content '>
            <h3 className='h1 text-center py-4'>Potato</h3>
            <div className='row food-row'>
                {Potatos.map((po) => {
                    return(
                        <div className='col-lg-4' key={po.id}>
                            <div className='card bg-warning'>
                                <div className='card-body bg-dark rounded-5 '>
                                    <h5 className='card-title text-center text-white py-5'>{po.name}</h5>
                                    <p className='card-text text-white bg-warning mx-5 rounded-5 my-5'>{po.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

          </div>
          </div>
          </div>
    )
}

/* {Potatos.map((po) => {
    return (<div>

    </div>
})} */
export default Potato