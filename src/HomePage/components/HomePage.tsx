// Importing images:
import profile from '../../assets/profile.jpg'

const HomePage = () => {
  return (
    <div>
        {/* Information */}
        <div>
            <div className=''>
                <img src={profile} />
            </div>
            <div>
                <h1>Kobe Lam</h1>
                <h2>Software Engineer</h2>
                <p></p>
            </div>
        </div>
        
        {/* Content */}
        <div>
            <h1>Projects</h1>
            <div>

            </div>
        </div>

    </div>
  )
}

export default HomePage