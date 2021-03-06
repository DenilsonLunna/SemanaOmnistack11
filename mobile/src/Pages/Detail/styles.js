import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: 30,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    incident:{
        marginTop:48,
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
    },
    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginTop:24,
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        color:'#737380'
    },
    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
    },
    heroTitle:{
        fontWeight:'bold',
        color:'#13131a',
        fontSize:20,
        lineHeight:30,
    },
    heroDescription:{
        fontSize:15,
        color:'#737380',
        marginTop:16,
    },
    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    action:{
        backgroundColor:'#e02041',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    }



})