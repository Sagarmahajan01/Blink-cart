import '../App.css'

const Contact = () => {
    return (
            <div className='ContactBox'>
        <div className="ContactContainer">
        <h2>Contact </h2>
            <form action="https://formspree.io/f/mqkrknka" method='POST'>  
            <input type="text" placeholder='Enter Your Name' name='Name' required autoComplete='off' />
            <input type="email" placeholder='Enter Your E-mail' required  name='E_mail' autoComplete='off' />
            <textarea name="Massage" id="" cols="60" rows="5" placeholder='Enter Your Massage' required autoComplete='off'></textarea>
            <button>SEND</button>
            </form>
          
          
        </div>


                            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.3705480159401!2d75.15553989725039!3d20.74607350391009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd94790894c2aa9%3A0xc7d6b13bef4aaf32!2sStatue%20of%20Shree%20Chhatrapati%20Shivaji%20Maharaj!5e0!3m2!1sen!2sin!4v1704522377576!5m2!1sen!2sin"
                    width={1000}
                    height={600}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />

        </div>
    );
}

export default Contact;
