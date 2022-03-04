import React from 'react'

export default function Section() {
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className='contact'>
        <h1 className='text-center mb-5'>Kontaktirajte me:</h1>
        <div className='mb-3 p-4'>
        <form action="https://formspree.io/f/mzboevpo" method="POST" className='d-flex flex-column mb-3 p-2'>
        <label className='form-label'>
        Email:<br/>
        <input type="email" name="_replyto" className='form-control'/>
        </label>
        <label className='form-label'>
            Poruka:<br/>
            <textarea name="message" className='form-control' rows="5"></textarea>
            </label>
            <button type="submit" className='contact-btn'>Pošalji</button>
        </form>
        <p className='small'><b>Napomena:</b> Forma radi zahvaljujući <a href="https://formspree.io" className='text-decoration-none contact-link'>Formpree.io</a>, tako da ćete biti redirektovani na kratko.<br/> Hvala na razumevanju!</p>
        </div>
        </div>
        </div>
      </div>
  )
}
