import image2 from '../assets/Medium.png'
import image4 from '../assets/img4.avif'
import image3 from '../assets/Rectangle.png'
const ImageSection = () => {
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-7 mb-3" style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="flex p-3 h-full rounded border-none justify-between items-center">
                        <div className='d-flex flex-col'>
                            <p className="text-white">Build By developer</p>
                            <h1 className='fs-2 text-white'>Reward Software system</h1>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid <br /> saepe sapiente iure aspernatur molestias, dicta consequuntur quae. Voluptate, fugiat reiciendis!</p>
                        </div>
                        <div className='pt-5 rounded'>
                            <span className='text-white'><img src={image2} width={150} alt="" /></span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-5 mb-3 relative" style={{ backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="flex p-3 flex-col h-full rounded border-none justify-between relative z-10">
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                <h1 className="text-white fs-3">Build By developer</h1>
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cum adipisicing elit. Doloribus, cum.</p>
                            </div>
                            <div className="border-white pb-2">
                                <p className="text-white">Read More...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageSection