import image from "../Admin/gardenia.png"

function Home(){
    return (
        <>
        <div style={{backgroundColor:"red",marginBottom:"10px",display:"flex"}}>
            <img src={image} alt="" style={{width:"150px",height:"80px",marginLeft:"20px"}}/>
            <input type="text" placeholder="Search" style={{width:"40%",height:"50px",margin:"auto"}}/>

            
        </div>
        <img src="https://cdn.webshopapp.com/shops/255731/themes/140444/v/392346/assets/index-banner-2-background.jpg?20201208135934" alt="" style={{width:"100%",minHeight:"100vh"}}/>
        </>
    )
}
export default Home