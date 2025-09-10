import {ClipLoader} from 'react-spinners'

const Spinner = () => {
    return (
        <section className='h-[100dvh] w-[100dvw] bg-dblue flex justify-center items-center'>
            <ClipLoader size={80} color='#00b4f0' />
        </section>
    )
}

export default Spinner