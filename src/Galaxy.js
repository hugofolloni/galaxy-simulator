import { useState, useEffect } from "react"

const Galaxy = () => {

    const [stars, setStars] = useState([])
    const starNumber = 300;

    const mousePosition = useMousePosition()
    var w = window.innerWidth;
    var h = window.innerHeight;

    const [changing, setChanging] = useState(0)

    window.addEventListener('load', () => {
        var createStars = []
        for(let i = 0; i < starNumber; i++){
            const size = Math.ceil(Math.random() * 3) + 2
            createStars.push({x: Math.ceil(Math.random() * w), y: Math.ceil(Math.random() * h), color: 'white', size: `${size}px`, attracted: 0})
        }
        setStars(createStars)
    })

    const moveStar = (star, mouse) => {
      var repetitions = 0;
      const moving = setInterval(() => {
        if(star.x > mouse.x){
          star.x -= 0.05
        }
        else{
          star.x += 0.05
        }
        if(star.y > mouse.y){
          star.y -= 0.05
        }
        else{
          star.y += 0.05
        }
        repetitions++;
        if(repetitions === 10) {
          clearInterval(moving)
          setChanging(changing + 1)
        }
      }, 10)
    }

    const repulseStars = (star, mouse) => {
      var repetitions = 0;
      const xDiff  = (Math.ceil(Math.random() * 10) * 0.01)
      const yDiff  = (Math.ceil(Math.random() * 10) * 0.01)
      const repulse = setInterval(() => {
        if(star.x > mouse.x){
          star.x += xDiff
        }
        else{
          star.x -= xDiff
        }
        if(star.y > mouse.y){
          star.y += yDiff
        }
        else{
          star.y -= yDiff
        }
        repetitions++;
        if(repetitions === 100) {
          clearInterval(repulse)
          setChanging(changing + 1)
        }
      }, 10)
    }

    useEffect(() => {
      if(stars.length > 199){
        for(let i = 0; i < starNumber; i++){
            if((Math.abs(mousePosition.x - stars[i].x) < 100) && (Math.abs(mousePosition.y - stars[i].y) < 100)){
              moveStar(stars[i], mousePosition)
              stars[i].attracted = 1
            }
            else{
              if(stars[i].attracted === 1){
                repulseStars(stars[i], mousePosition)
                stars[i].attracted = 0
              }
            }
        }
      }
    }, [changing, mousePosition, stars])

    return ( 
        <div className="galaxy">
            {stars.length > 100 && stars.map((item, index) => (
                <div className="star-div" style={{marginLeft: item.x + 'px', marginTop: item.y + "px", width: item.size, height: item.size, backgroundColor: item.color}}/>
            ))}
        </div>
     );
}
 

const useMousePosition = () => {
  const [ mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default Galaxy;
