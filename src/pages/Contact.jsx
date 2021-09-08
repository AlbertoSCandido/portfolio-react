import React from 'react'
import { send, init } from 'emailjs-com';
import '../styles/contact.css';
import instagram from '../img/instagram.svg';
import gitHub from '../img/gitHub.svg';
import linkedIn from '../img/linkedIn.svg';
import twitter from '../img/twitter.svg';
import spotify from '../img/spotify.svg';


const Contact = () => {
  const initialState = {
    from_name: '',
    to_name: 'Alberto',
    message: '',
    reply_to: '',
  }

  const [toSend, setToSend] = React.useState(initialState);

  const onSubmit = (e) => {
    init("user_mdrJJlYqofmzWIFqxmIws");
    e.preventDefault();

    console.log('entrei');
    if (toSend.from_name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    if (toSend.reply_to.trim() === '') {
      alert('Please enter your email');
      return;
    }
    if (toSend.message.trim() === '') {
      alert('Please enter your message');
      return;
    }
  
    send(
      'service_a70vrtw',
      'template_ou98d82',
      toSend,
      'user_mdrJJlYqofmzWIFqxmIws'
    )
      .then(() => {
        alert('Your message has been sent!');
        setToSend(initialState);
      })
      .catch(() => {
        alert('An error has occurred');
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <main className="main-contact">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Seu nome"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Sua Mensagem"
          value={ toSend.message }
          onChange={ handleChange }
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Seu email"
          value={ toSend.reply_to }
          onChange={ handleChange }
        />
        <button type="submit" onClick={ onSubmit }> 
          Enviar
        </button>
      </form>
      {/* animação de redes sociais usando base https://code-architects.github.io/social-media-icons/ */}
      <div class="wrapper">
          <div class="socialicons">
              <a href="https://github.com/albertoscandido" title="GitHub" class="icon"><img src={ gitHub } alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/albertocandido/" title="LinkedIn" class="icon"><img src={ linkedIn } alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/albertocandido98/" title="Instagram" class="icon"><img src={ instagram } alt="Instagram" /></a>
              <a href="https://www.instagram.com/albertocandido98/" title="Twitter" class="icon"><img src={ twitter } alt="twitter"/></a>
              <a href="https://www.instagram.com/albertocandido98/" title="Spotify" class="icon"><img src={ spotify } alt="spotify"/></a>
          </div>
      </div>
    </main>
  );
}

export default Contact;