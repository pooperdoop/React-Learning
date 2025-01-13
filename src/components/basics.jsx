
function Card(){
    return(
        <section className="mt-3 w-100 d-flex justify-content-center align-items-center basics components" id="basics">
            <h1 className="sectionTitle sectionTitle1">JSX importing / Bootstrap</h1>

            <div className="card bg-info">
                <img src="./peng.png" className="card-img-top" alt="cardImg" />
                <div className="card-body">
                    <hr />
                    <h3 className="card-title">Basic Bootstrap Card</h3>
                    <p className="card-text">This is a card made with bootstrap but in react. <br />
                    Just an example of using a jsx file as a component</p>
                </div>
            </div>
        </section>
    )
}

export default Card