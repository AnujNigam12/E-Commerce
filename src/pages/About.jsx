import React from 'react'

export default function About() {
  return (
    <div>
  {/* ABOUT PAGE */}
  <section className="aboutSection">
    <h1 className="heading text-4xl">ABOUT</h1>
  </section>
  {/* Section */}
  <main className="mainAbout">
    <section className="aboutFirstSection">
      <div className="textDiv">
        <h1 className="headingText" />
        <h5 className="secondHeading" />
        <a href="#">Learn more &gt;</a>
      </div>
    </section>
    <section className="aboutSecondSection">
      <h3 className="heading text-3xl">Featured Stories</h3>
      <div className="featured">
        <div className="leftFeatured">
          <img src="https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/_resampled/FillWzcxOCw0MDRd/240916-Global-Give-2024-v1-inc-16x9-A.jpg?fs=599d6539c16cea4c" className="leftFeaturedImage" alt height={250} style={{borderRadius: 5, marginRight: 15}} />
        </div>
        <div className="rightFeatured">
          <p className="date">Sep 28, 2024 | E-commerce Foundation</p>
          <a href className="link">E-commerce Foundation Award $3M to Help Drive Inclusive Enterpreneurship</a>
          <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum impedit voluptas
            earum dolor accusantium error deserunt velit iusto! Expedita, nemo provident aspernatur itaque
            assumenda eius molestiae cumque commodi. Iure pariatur, dolores reprehenderit repellendus
            impedit ut laborum odio temporibus soluta asperiores quas ducimus? Nam excepturi error quod,
            similique eligendi architecto repellendus!</p>
          <p className="foot">E-commerce News Team</p>
        </div>
      </div>
    </section>
    <section className="aboutThirdSection">
      <h3 className="heading text-3xl">Our Purpose in Action</h3>
      <div className="purpose">
        <a href className="me-4 text-reset">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </section>
    <section className="aboutFourthSection">
      <div className="join">
        <h4 className="heading text-3xl" style={{marginBottom:'20px'}}>Join Our Team</h4>
        <div className="joinInner">
          <img src="https://static.ebayinc.com/static/assets/Uploads/_resampled/FillWzUzNSwyNjFd/join-our-team.jpg?v=2&fs=b64da5362cd315e0" alt />
          <h5 className="request">Start searching for your e-commerce career in:</h5>
          <div className="float">
            <li className="floatinfText" style={{marginLeft: '150px'}}>Advertising</li>
            <li className="floatinfText" style={{marginLeft: '150px'}}>Customer Service</li>
            <li className="floatinfText" style={{marginLeft: '150px'}}>Design & UX</li>
            <li className="floatinfText" style={{marginLeft: '150px'}}>Data Science</li>
            <li className="floatinfText" style={{marginLeft: '150px'}}>Global Internships</li>
            <li className="floatinfText" style={{marginLeft: '150px'}}>IT & Technical Operations</li>
            <li className="floatinfText" style={{marginLeft: '150px'}}>People Team</li>
            <li className="floatinfText" style={{marginLeft: '150px'}}>Product Management</li>
          </div>
          <hr className="horizontalLine" />
          <a href="#" className="linkTheJoin">See All Opennings &gt;</a>
        </div>
      </div>
      <div className="award">
        <h4 className="heading text-3xl" style={{marginBottom:'20px'}}>Awards &amp; Recognition</h4>
        <div className="awardInner">
          <img src="https://static.ebayinc.com/static/assets/Uploads/Carousel/_resampled/FillWzUzNSw1MjJd/DYK-T3-GlassdoorEmployeesChoice.jpg?fs=e28e7cf8b4c35f03" alt className="awardImageSlider" />
          <div className="float">
            <div className="fas fa-angle-left" onclick="prev()" />
            <div className="fas fa-angle-right" onclick="next()" />
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

  )
}
