export default function HeaderTitle({title}){
    return(
        <section className='bg-red-500 text-white flex justify-center p-5 rounded-b-md'>
            <h1 className='text-xl font-bold'>
                {title}
            </h1>
        </section>
    )
}