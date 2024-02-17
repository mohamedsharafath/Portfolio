import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <spam className="skills__level">Intermediate</spam>
                    </div>
                </div>
            
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Django</h3>
                        <spam className="skills__level">Basic</spam>
                    </div>
                </div>
            
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <spam className="skills__level">Basic</spam>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <spam className="skills__level">Basic</spam>
                    </div>
                </div>
                {/* <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <spam className="skills__level">Basic</spam>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <spam className="skills__level">Basic</spam>
                    </div>
                </div> */}
            </div>
               
            
        </div>
        
    </div>
  )
}

export default Backend