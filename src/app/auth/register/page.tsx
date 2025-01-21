import FormModal from '../_components/form-modal'

export default function RegisterPage() {
  return (
    <>
            <section className="main-section min-h-screen bg-no-repeat bg-center bg-cover relative z-10 flex justify-center items-center py-20 px-5 md:px-0">
              <div className="overlay absolute w-full h-full bg-black bg-opacity-20"></div> 
              <FormModal form="register"/>
            </section>  
    </>
  )
}
