import { Link, } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='py-1 bg-dark text-white  position-relative'>
<div className="container">
  <div className='d-flex   justify-content-between'>
  <p className='lead'>
    copyright &copy; 2024 
  </p>
  <a href="#" className='position-absolute bottom-0 end-0 py-1'><i className='bi bi-arrow-up-circle text-warning h1'> </i></a>
  <p className=''>
  Behind El Naser Preparatory School, Qweisna Al Minufiyah
  </p>
  <p > The number: 09215645164</p>
  </div>
</div>
    </footer>
  )
}

export default Footer