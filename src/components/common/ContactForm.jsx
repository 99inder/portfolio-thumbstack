import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleFormDataChange = (e) => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // make API call

        // reset form state
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        })

        toast.success("Form Submitted Successfully")
    }

    return (
        <div className="contactus-form-container" id="contactme">
            <div className="container">

                <h1 className="contactus-heading">Contact me</h1>

                <h3 className="contactus-sub-heading">
                    Questions, thoughts, or just want to say hello?
                </h3>


                <div className="contactus-form-container">
                    <form onSubmit={handleSubmit} className="form" action="">
                        <div className="formfield-container">
                            <input className="formfield" type="text" name="name" id="" value={formData.name} onChange={handleFormDataChange} placeholder="Enter your name" />

                            <input className="formfield" type="email" name="email" id="" value={formData.email} onChange={handleFormDataChange} placeholder="Enter your email address" />

                            <input className="formfield" type="text" name="subject" id="" value={formData.subject} onChange={handleFormDataChange} placeholder="Enter your subject" />

                            <textarea name="message" id="" cols="30" rows="10" value={formData.message} onChange={handleFormDataChange} className="formfield formfield-textarea"
                                placeholder="Enter your message"></textarea>

                        </div>

                        <div>
                            <button type="submit" className="btn-pink submit-icon" id="submit-btn">
                                Send Message<FaPaperPlane />
                            </button>
                        </div>

                    </form>

                </div>


            </div>
        </div>
    )
}

export default ContactForm