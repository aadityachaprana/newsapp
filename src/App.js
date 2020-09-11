import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import classes from './styles.js';


const alanKey='80d23cf2f3334ddeae1ee55d9d48729a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =()=>{
    const[newsArticles,setNewsarticles]=useState([]);
    // const[activeArticle,setActiveArticle]=useState(-1);
     const classes=useStyles();


    useEffect(()=> {
        alanBtn({
            key:alanKey,
            onCommand: ({command,articles})=>{
                if(command==='newHeadlines'){
                    setNewsarticles(articles);
                    setNewsarticles(articles);
                } 
                
            }
        })
    },[])

    return(
        <div>
           <div className={classes.logoContainer} >
              <img src = "https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo}/>
           </div>
            <NewsCards articles={newsArticles}/>
        </div>
    );
}

export default App;