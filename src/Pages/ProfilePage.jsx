import { Link } from 'react-router-dom'
import './ProfilePage.css'

const ProfilePage = () => {
  return (
    <section className='ProfilePage'>
        <div className='BaseInfoContainer'>
          <div className='ProfilePicture'></div>
          <h3 className='UserName'>Anonymous User</h3>

          <div className='Divider'></div>
          <h4>Finances</h4>
          <Link to={"/Error404"} className='Link'>Payment methods</Link>
          <Link to={"/Error404"} className='Link'>Payment details</Link>

          <div className='Divider'></div>
          <h4>Control</h4>
          <Link to={"/Error404"} className='Link'>Profile settings</Link>
          <Link to={"/Error404"} className='Link'>Linked devices</Link>
        </div>

        <div className='DetailsContainer'>
          <div className='RowTwoEl'>
            <div className='Element'>
              <p>Your available bonuses:</p>
              <p>0</p>
            </div>
            <div className='Element'>
              <Link to={"/Error404"} className='Link'>Contact support</Link>
            </div>
          </div>

          <div className='RowThreeEl'>
              <Link to={"/Favourites"} className='Link'>Favourites</Link>
              <Link to={"/Error404"} className='Link'>Purchase history</Link>
              <Link to={"/Error404"} className='Link'>Personal discounts</Link>
          </div>

          <div className='RowOneEl'>
            
          </div>
        </div>
    </section>
  )
}

export default ProfilePage
