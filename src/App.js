import logo from './logo.svg';
import Bodycomponent from './home/home';
import Gallerycomponent from './gallery/gallery';
import "swiper/css/bundle";
import "./home/home.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import {store} from './store';
import {gallery} from './gallery/gallerySlice';
import {About} from './about/about';
import {pageSlice} from './gallery/pageSlice';
import {moreinfoSlice} from './gallery/moreinfoSlice';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <div className="header">
            <div className="mark">
                <div><Link to="mywebsite/">LinSJ Studio</Link></div>
            </div>   
            <div className="cen">
                <div><Link to="mywebsite/">Home</Link></div>
                <div className="about"><Link to="mywebsite/about">About</Link></div>
                <div className='gallery' onClick={()=>{
                    store.dispatch(gallery.actions.getall());
                    store.dispatch(pageSlice.actions.firstpage());
                    store.dispatch(moreinfoSlice.actions.closed())}}>
                    <Link to="mywebsite/gallery">Gallery</Link>
                </div>
                <div className="equipment"><Link to="mywebsite/equipment">Equipment</Link></div>
            </div>
            
        </div>
        <Routes>
            <Route path="mywebsite/" element={<Bodycomponent />} />
            <Route path="mywebsite/gallery" element={<Gallerycomponent reset={true}/>}></Route>
            <Route path='mywebsite/about' element={<About />}></Route>
        </Routes>
        
        
        <footer>
            <div className="icon-footer">
                <div className="icon">
                    <a href="https://www.facebook.com/jhengwei.lin" target={"_blank"}><img src={require("./photo/facebook.png")} /></a>
                </div>
                <div className="icon">
                    <a href="https://www.instagram.com/linsjphoto/" target={"_blank"}><img src={require("./photo/instagram.png")} /></a>
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/%E6%94%BF%E5%A7%94-%E6%9E%97-350698226/" target={"_blank"}><img src={require("./photo/linkedin.png")} /></a>
                </div>
                <div className="icon">
                    <a href="https://www.twitch.tv/sololin_tw" target={"_blank"}><img src={require("./photo/twitch.png")} /></a>
                </div>
            </div>
            <div className="info-footer">
            © 2022 LSJ Studio All rights reserved.
            </div>
        </footer>   
        </div>
    </BrowserRouter>
    
  );
}

export default App;
