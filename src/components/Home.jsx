import React from 'react'
import vg  from "../assets/bg2.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
  <>
  <div className='home'  id='home' >
<main>
<h1>KrishnaTech</h1>

<p>Solution To Your Problem</p>

</main>
  </div>
  
  <div className='home2'>
<img src={vg} alt="Graphics" />


<div>
<p>I provide best services for web deveopment using react we will provide you
  responsive website with craetive and amazing looks
</p>
</div>

  </div>
  
  <div className='home3' id='about' >
  
  
   <div>
   <h1>About Me</h1>
<p>
I am a skilled web developer with a passion for creating dynamic and engaging web applications using React! With a strong foundation in this powerful JavaScript library, they bring innovation and creativity to every project, delivering sleek, responsive, and user-friendly websites that leave a lasting impression. Their commitment to staying on the cutting edge of web development ensures that your online presence will not only meet but exceed your expectations.
</p>
</div>
  </div>


<div className='home4' id='brands' >
<div>
<h1>Brands</h1>

<article>

<div  style={{animationDelay:"0.3s"}}  >

<AiFillAmazonCircle/>
<p>Amazon</p>
</div>

<div  style={{animationDelay:"0.5s"}}  >

<AiFillGoogleCircle/>
<p>Google</p>

</div>
<div  style={{animationDelay:"0.7s"}}  >

<AiFillYoutube/>
<p>Youtube</p>
</div>
<div  style={{animationDelay:"1s"}}  >

<AiFillInstagram/>
<p>Instagram</p>

</div>

</article>

</div>




</div>











  </>
  )
}

export default Home