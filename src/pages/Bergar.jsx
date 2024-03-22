import { Bergars } from '../data'
const Bergar = () => {
    return (
        <div className='bg-warning'>
        <div className='container content '>
            <h3 className='h1 text-center py-4'>Bergar</h3>
            <div className='row food-row'>
                {Bergars.map((po) => {
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

export default Bergar