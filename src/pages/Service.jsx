import React from 'react'

export default function Service() {
  return (
  <div>
  {/* SERVICE PAGE */}
  <section className="serviceSection">
    <h1 className="heading text-4xl">SERVICES</h1>
  </section>
  <main>
    <section className="serviceFirstSection">
      <div className="box">
        <h2 className='text-2xl'>Fast Delivery</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem laudantium saepe sequi
          temporibus.</p>
      </div>
      <div className="box box1">
        <h2 className='text-2xl'>24/7 Support</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem laudantium saepe sequi
          temporibus.</p>
      </div>
      <div className="box">
        <h2 className='text-2xl'>Cash on Delivery Available</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem laudantium saepe sequi
          temporibus.</p>
      </div>
      <div className="box box1">
        <h2 className='text-2xl'>Product Tracking Facility</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem laudantium saepe sequi
          temporibus.</p>
      </div>
    </section>
    <section className="serviceSecondSection">
      <div className="experience">
        <h1 className='text-4xl'>MY EXPERIENCE IN NUMBERS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nisi odit et ea? Earum deserunt
          reiciendis illum dolor tempora corrupti!</p>
      </div>
      <div className="sharing">
        <div className="box">
          <h1 className='text-3xl'>45+</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur reprehenderit
            voluptatibus sunt dolor expedita.</p>
        </div>
        <div className="box">
          <h1 className='text-3xl'>1,800+</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur reprehenderit
            voluptatibus sunt dolor expedita.</p>
        </div>
        <div className="box">
          <h1 className='text-3xl'>90%</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur reprehenderit
            voluptatibus sunt dolor expedita.</p>
        </div>
      </div>
    </section>
    <section className="serviceThirdSection">
      <div className="serviceQualityText">
        <h1 className='text-4xl underline' style={{marginBottom:'20px'}}>E-Commerce</h1>
        <p>Your customers just learned what services you offer. Tell them why they should work with you or your team, for example you could highlight your experience and positive client reviews.</p>
        <p>The badges illustrate this.  We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.</p>
      </div>
      <div className="quality">
        <div className="box">
          <i className="ri-award-fill" />
        </div>
        <div className="box">
          <i className="ri-star-fill" />
        </div>
        <div className="box">
          <i className="ri-loop-left-fill" />
        </div>
        <div className="box">
          <i className="ri-copper-coin-line" />
        </div>
      </div>
    </section>
  </main>
</div>

  )
}
