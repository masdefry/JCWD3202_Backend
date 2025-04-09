export default function TimeOffDetailModal(){
    return(
        <>
            <button className='btn w-full' onClick={()=>document.getElementById('my_modal_1').showModal()}>View</button>
            <dialog id='my_modal_1' className='modal'>
                <div className='modal-box'>
                    <h3 className='font-bold text-lg'>Time Off Reason</h3>
                    <section className='py-5'>
                        <div>
                            <span className='text-xs'>
                                From
                            </span>
                            <h1 className='font-bold text-md'>
                                Sangalabror Pujianto
                            </h1>
                        </div>
                        <div>
                            <span className='text-xs'>
                                Reason
                            </span>
                            <h1 className='font-bold text-md'>
                                Izin Sakit
                            </h1>
                        </div>
                    </section>
                    <div className='modal-action'>
                        <button className='btn bg-green-600 text-white'>Accept</button>
                        <form method='dialog'>
                            <button className='btn'>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}