function HomePage({login}){
    return(
        <div>
            <div>
            <h1><span>Nu</span> Kenzie</h1>
            <p>Centralize o controle das suas finanças</p>
            <label>de forma rápida e segura</label>
            <button onClick={login}>Iniciar</button>
            </div>
            <div>
                {/* <img className='app__login__image' src={back} alt="" /> */}
            </div>
        </div>
    )
    }
    
    export default HomePage;