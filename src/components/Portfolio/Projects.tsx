import './Projects.css';
import IMAGES from '../../assets/Images/Images';

const Projects = () => {
  return (
    <div
      id='project'
      className='Projects d-flex flex-column justify-content-center align-items-center'
    >
      <div className='text-center'>
        <h2 className='project-heading text-white'>PROJECTS</h2>
      </div>
      <div className='row project-section m-0 justify-content-center'>
        <div className='col-3'>
          <div className='project-image'>
            <img src={IMAGES.image1} className='img-fluid' />
          </div>
          <div className='project-content'>
            <div className='d-flex justify-content-between my-3'>
              <span>
                <a
                  href='https://drive.google.com/file/d/16qY5eW5KbPdGMjsbhsmlTkSDkXFK_R40/view?usp=sharing'
                  target='_blank'
                  className='link-tags'
                >
                  Video Link
                </a>
              </span>
            </div>
            <div>
              <p>
                Developed a professional website for Jalan Technology Consulting
                using React and Gatsby Framework.
              </p>
              <p>
                Enhanced user experience through responsive design
                implementation using Bootstrap CSS framework.
              </p>
              <p>
                Achieved heightened user engagement and extended session
                durations.
              </p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='project-image'>
            <img src={IMAGES.image2} className='img-fluid' />
          </div>
          <div className='project-content'>
            <div className='d-flex justify-content-between my-3'>
              <span>
                Github Link:{' '}
                <a
                  href='https://github.com/hsahu615/ExamPortal_Client'
                  target='_blank'
                  className='link-tags'
                >
                  FE
                </a>
                <a
                  href='https://github.com/hsahu615/ExamPortal_Server'
                  target='_blank'
                  className='link-tags'
                >
                  BE
                </a>
              </span>
              <span>
                <a
                  href='https://drive.google.com/file/d/1b6B3-9Y7_W1fQ3vVcZMxSdzYs-iMMb-C/view?usp=sharing'
                  target='_blank'
                  className='link-tags'
                >
                  Video Link
                </a>
              </span>
            </div>
            <div>
              <p>
                Developed a personal WebApp where a student can give exam which
                is set up by teacher. Useful Links: Video Link Git Repo Link
              </p>
              <p>
                This application can be logged in as Admin and User, where admin
                can create, edit, and update quizzes, questions and categories.
                Users can attempt quizzess setup by admin.
              </p>
              <p>
                Used Spring Boot to create APIs and to interact with MySQL
                database, and used Spring Security with JWT for authentication.
              </p>
              <p>
                Used Angular JS and its features like, Interceptors, Guards,
                Angular Material UI etc.
              </p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='project-image'>
            <img src={IMAGES.image3} className='img-fluid' />
          </div>
          <div className='project-content'>
            <div className='d-flex justify-content-between my-3'>
              <span>
                <a href='#' className='link-tags'></a>
              </span>
            </div>
            <div>
              <p>
                Implemented SonarQube forthree projects, enhancing code quality
                and reducing technical debt.
              </p>
              <p>
                Set up Docker-based SonarQube on Digital Ocean Cloud for
                continuous code analysis and real-time feedback.
              </p>
              <p>
                Integrated SonarQube and setup CI pipeline using CircleCI,
                automating code checks and saving $60/month by using open-source
                Dockerimage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
