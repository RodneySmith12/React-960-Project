import React from "react"

function Home() {
    return (
        <>
            <div className="container_12">
                <div className="grid_12">
                    <img src="images/thinkbig.jpg" alt="" />
                </div>
            </div> 
            
            <div className="container_12">
                <div className="grid_4">
                    <h2>Smart</h2>
                    <img className="Button" src="images/leftpicture.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur commodi iure voluptatum dolore corrupti aliquam, delectus quia tempora rerum quaerat est! Nesciunt praesentium ipsa repellat quas consequuntur minus? Laudantium!</p>
                    <a href="#link" className="more">MORE</a>
                </div>
                <div className="grid_4">
                    <h1>Strong</h1>
                    <img className="button" src="images/middlepicture.jpg" alt="" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quam quos quasi corporis illum, ea voluptatibus facere excepturi sed eos tempora temporibus expedita cumque tempore quo at fugiat? Quia, sunt.
                    <a href="#link" className="more" style={{position: 'relative',
                    top: '18px'}} >More</a></p>
                </div>
                <div className="grid_4">
                    <h1>Stable</h1>
                    <img className="Button" src="images/rightpicture.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam at accusantium facilis nisi amet architecto libero culpa sunt id, a dolore explicabo deleniti laborum minima officia. Placeat, quae perferendis.</p>
                    <a href="#link" className="more" style={{position: 'relative',
                    bottom: '14px',
                    left: '139px'}}>More</a>
                </div>
            </div>
        </>
    )
}

export default Home