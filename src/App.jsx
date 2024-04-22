import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header titulo={"Adopta un Perrito"}/>
    <div className='card-container'>
      <MyCard url={"https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} nombre={"Simón"} descripcion={"Este perrito es pura dulzura: siempre dispuesto a recibir caricias y dar lamidas de amor. ¿Listo para ser su mejor amigo?"} color={"primary"} raza={"Beagle"}/>
      <MyCard url={"https://images.pexels.com/photos/2853130/pexels-photo-2853130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} nombre={"Lobo"} descripcion={"¿Buscas un compañero fiel y juguetón? Este perrito tiene todo lo que necesitas para llenar tu hogar de alegría y diversión."} color={"warning"} raza={"Husky"}/>
      <MyCard url={"https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} nombre={"Suri"} descripcion={"Con su cola moviéndose sin parar y sus ojos brillantes, este perrito robará tu corazón al instante. ¡Ven y conócelo!"} color={"success"} raza={"Labrador"}/>
      <MyCard url={"https://images.pexels.com/photos/17819194/pexels-photo-17819194/free-photo-of-perro-exterior-mascota-mono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} nombre={"Bruno"} descripcion={"Amoroso y tierno, este perrito está ansioso por encontrar un hogar donde pueda recibir todo el cariño que tiene para dar."} color={"danger"} raza={"Poodle"}/>
    </div>
    <Footer />
    </>
  )
}

export default App
