import React from 'react'
import  '../Styles/cards.css'
import uzair from '../assets/uzair.jpg'
import sachin from '../assets/sachinimg.jpeg'
const CardsComp = () => {
  return (
    <div className='cards-cont'>
      <div className='heading'>
      <h1>Meet Our Developers</h1>
      </div>
<div className='box1'>
<div className="box">
		<p>
			<img className='devimg' src={sachin} alt='sachin img'/>
		</p>
    <p>Sachin <span style={{fontSize:"30px"}}>(Full Stack Developer)</span> </p>
	</div>
  <div>
  <h1>Sachin</h1>
    <p className='aboutus'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor voluptates deserunt excepturi corporis minus, atque eum culpa recusandae aliquid ex magnam laudantium dicta laboriosam deleniti, provident quidem dolorum quo.
    Similique pariatur doloremque error non officia reiciendis harum quidem eaque, libero possimus dolorem eligendi, quis necessitatibus quia! Cupiditate, exercitationem consequatur. Totam nesciunt harum molestiae cupiditate, sint quos quis. Tempora, laborum!
    Mollitia delectus explicabo consectetur pariatur odit repellat id expedita molestias, illum ullam aliquid sed hic similique eaque voluptatem vitae officia velit vel! Consequatur ipsum atque assumenda sunt et pariatur maxime!
    Aliquam quod distinctio ex corporis minima a aliquid. Dolorum tempora vel beatae rem assumenda aut, illo facilis minima dolores tenetur deserunt reiciendis voluptatem dicta deleniti id tempore repellat, sed quia.
    A iure architecto dolorum magnam nihil, debitis officiis, tempora optio laudantium expedita veritatis sit totam dignissimos nobis rerum necessitatibus soluta temporibus ullam exercitationem accusantium, corrupti ex. Sequi ullam optio animi?
    </p>
  </div>
</div>
<div  className='box2'>
<div class="box">
		<p>
			<img className='devimg' src={uzair} alt='sachin img'/>
		</p>
    <p>Uzair <span style={{fontSize:"30px"}}>(Full Stack Developer)</span> </p>
	</div>

  <div>
  <h1>Uzair</h1>
  <p className='aboutus'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor voluptates deserunt excepturi corporis minus, atque eum culpa recusandae aliquid ex magnam laudantium dicta laboriosam deleniti, provident quidem dolorum quo.
    Similique pariatur doloremque error non officia reiciendis harum quidem eaque, libero possimus dolorem eligendi, quis necessitatibus quia! Cupiditate, exercitationem consequatur. Totam nesciunt harum molestiae cupiditate, sint quos quis. Tempora, laborum!
    Mollitia delectus explicabo consectetur pariatur odit repellat id expedita molestias, illum ullam aliquid sed hic similique eaque voluptatem vitae officia velit vel! Consequatur ipsum atque assumenda sunt et pariatur maxime!
    Aliquam quod distinctio ex corporis minima a aliquid. Dolorum tempora vel beatae rem assumenda aut, illo facilis minima dolores tenetur deserunt reiciendis voluptatem dicta deleniti id tempore repellat, sed quia.
    A iure architecto dolorum magnam nihil, debitis officiis, tempora optio laudantium expedita veritatis sit totam dignissimos nobis rerum necessitatibus soluta temporibus ullam exercitationem accusantium, corrupti ex. Sequi ullam optio animi?
    </p>
  </div>
</div>

    </div>
  )
}

export default CardsComp