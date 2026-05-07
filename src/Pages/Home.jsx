import profile from '../assets/Profile.jpg'
import { stack } from "../data/stack";
function Home(){
    return(
        <>
        <div>
            {/**Top part showing name and stuff */}
            <div className="top">
                <h1>Hi I'm Tammy.<br></br><span>Full Stack Dev.</span></h1>
                <p>I'm a softtware Engineering student who has made multiple projects over 2+ years and finally took software development seriously and since then i have seriously improved since i've began </p>
                <button>Get in Touch</button>
            </div>
            {/**About section that shows about me  */}
            <div className="about">
                <div className="image">
                    <img src={profile} alt=""/>
                </div>
                <div className="text">
                    <h1>Fagboyegun Oluwatamilore</h1>
                        <p>I'm a software Engineering Student who loves building real-world projects for fun and hopefully get a good job after college , i've built lots of projects that you can view right here in my portfolio and i really hope people see my efforts and hope i will someday be rewarded with a good job tha pays $500k yearly or even more .</p>
                        <div className="bar">
                            <div className="baa">
                                <h2>2+</h2>
                                <p>Years Expereince</p>
                            </div>
                            <div className="bab">
                                <h2>12+</h2>
                                <p>Completed Projects</p>
                            </div>
                        </div>
                </div>
            </div>
            {/**Stach section showing diffenrt programming languages and tools */}
            <div className="stack">
                <h1>Tech Stack</h1>
                <div className="list">
                {stack.map((stac) => (
                    <div className="box" key={stac.id} style={{
                        animation: `fade-in ${stac.id}s`
                    }}>
                        <img src={stac.img} alt="" />
                        <h2>{stac.name}</h2>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;