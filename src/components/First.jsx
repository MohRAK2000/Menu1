import  hero from '../assets/hero.png'

const First = () => {
    return(
<section className='bg-dark text-white text-center text-sm-start py-5 '>
      <div className='container'>
        <div className='d-sm-flex align-items-center justify-content-center'>
           <div className='py-4'>
             <h1 className='display-2'><span className='text-warning'>Eat &</span> <br /> Enjoy the true taste</h1>
             <button className='btn btn-warning'>menu</button>
           </div>
            <img className='w-50' src={hero} alt="hero"  />
         </div>
      </div>
    </section>
    )
}
export default First