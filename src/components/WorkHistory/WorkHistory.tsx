import './WorkHistory.css';

const WorkHistory = () => {
  return (
    <div
      id='work'
      className='work-history d-flex flex-column justify-content-center align-items-center'
    >
      <div>
        <h2 className='text-white'>WORK HISTORY</h2>
      </div>
      <div className=''>
        <table className='experience-table'>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Start</th>
            <th>End</th>
          </tr>
          <tr>
            <td>Infosys Ltd.</td>
            <td>Digital Specialist Engineer</td>
            <td>OCT 2022</td>
            <td>Present</td>
          </tr>
          <tr>
            <td>Jalan Technologies</td>
            <td>Software Engineer</td>
            <td>JULY 2022</td>
            <td>AUG 2022</td>
          </tr>
          <tr>
            <td>Jalan Technologies</td>
            <td>Software Engineer Intern</td>
            <td>OCT 2021</td>
            <td>JUN 2022</td>
          </tr>
        </table>
      </div>
      <a
        href='https://drive.google.com/file/d/16vumUB-pSXxP_zMDgucAKQHOws28R8j-/view?usp=sharing'
        target='_blank'
      >
        <button type='button' className='btn cbtn-dark rounded-pill'>
          Check my Resume
        </button>
      </a>
    </div>
  );
};

export default WorkHistory;
