import { Fragment, useState } from 'react';
import './App.css';
import axios from 'axios';
import Button from './components/Button'
const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = () => {
    setLoading(true)
    axios.get('https://randomuser.me/api/')
      .then((response) => {
        console.log(response.data.results);
        setUserData(response.data.results);
      }).catch((error) => {
        console.log(error);
        setLoading(true);
      }).finally(() => {
        setLoading(false);
        setActiveUser(true);
      })
  }
  return (
    <div className="App">
      <h1>Aplicación de Generador Aleatoria de Usuarios</h1>
      <Button isActive={activeUser} clicked={onClickHandler} />
      {/* Verificamos que se esté cargando la información */}
      {loading ? (
        <h1>Cargando.. </h1>
      ) : (
        <div className='app__user'>
          ||||||{/* Aqui vamos a generar la imagen, para eso tenemos que recorrer los datos */}
          {userData.map((user, index) => {
            return (
              <Fragment>
                <img src={user.picture.large} alt="#" />
              </Fragment>
            )

          })}
        </div>
      )}
    </div>
  );
}

export default App;
