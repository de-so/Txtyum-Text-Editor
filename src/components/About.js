import React from 'react'

export default function About(props) {
  return (
    <div className='container remove'>
      <h2>Cookbook</h2>
      <p className='container'>
        Hi, this is your cook <strong>Souvik</strong>. I am a B.Tech computer science fellow. Hope you liked my kitchen here. Feel free to cook your text in my kitchen and make it yummy...
      </p>
      <h4>Our features</h4>
      <div className="accordion container" id="accordionExample">
        <div className={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <h2 className="accordion-header">
            <button className="accordion-button bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Easy to use
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Intuitive design and seamless functionality define our platform, ensuring an effortless user experience</strong>. Simplifying complexities, our user-friendly interface empowers you to navigate with ease. From streamlined navigation to straightforward tools, every aspect is crafted for accessibility. Embracing simplicity without compromising on capability, our solution fosters a hassle-free journey. Enjoy a frictionless experience, whether you're a novice or an expert.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <h2 className="accordion-header">
            <button className="accordion-button bg-secondary text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Device compatibility
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Our solution is device-agnostic, offering seamless compatibility across mobile and computer platforms</strong>. Enjoy a cohesive experience tailored to both smartphones and desktops. With responsive design and synchronized functionalities, transition effortlessly between devices. Whether on the go or at your desk, access tools consistently. Switch without disruption, picking up from where you left off. Embrace a unified experience that transcends device boundaries, ensuring your convenience and flexibility. Welcome to a world where compatibility means a harmonious tech ecosystem, empowering you wherever you are.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <h2 className="accordion-header">
            <button className="accordion-button bg-secondary text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Different modes
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Embrace our dual mode feature—seamlessly toggle between dark and light themes</strong>. Whether preferring a sleek, dark interface for reduced eye strain or a vibrant, light mode for clarity, our system ensures a personalized experience. Enhance comfort and readability based on your preference, offering versatility for all users.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <h2 className="accordion-header">
            <button className="accordion-button bg-secondary text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Free of cost
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Unleash your creativity with our free text editor.</strong> Access powerful features without any cost. Write, edit, and create without limits. We're dedicated to fostering a community where innovation knows no bounds. Join us in crafting a world where 'free' means endless possibilities for your ideas to flourish.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
