import TitleSection from '../elements/title/TitleSection'
import FormContact from '../fragments/form/FormContact'
const Contact = ()=>{
    return (
        <section id="contact" className="py-28 bg-blue-50">
            <div className="container ">
                <TitleSection section="Contact Us" title="Contact the Curve Team" />
                <div className="px-4 flex justify-center">
                    <FormContact></FormContact>   
                     
                </div>
            </div>
        </section>
    )
}
export default Contact