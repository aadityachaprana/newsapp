import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container:{
        padding:'0 5%' ,
        width:'100%' ,
        margin : 0,
    },
    card: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        height:'45vh',
        width:'100%',
        padding:'10%',
        borderRadius:10,
        color: 'white'
    },
    
    infocard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
    }
});
