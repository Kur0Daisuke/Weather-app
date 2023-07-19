import "./App.css"


function WeatherInfo(params) {
    const getDayName = (date = new Date(), locale = 'en-US') => {
        return date.toLocaleDateString(locale, {weekday: 'long'});
    }
    return (
        params.loading ? <>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>: 
        params.data === "e" ? <p>Error on finding weaher info of {params.name}</p> :  <>
        <div className="local">
            <div className="description">
                <h1 className="weathername">Weather of {params.name}</h1>
                <p>Description - {params.data.description}</p>
            </div>
            
            <div className="currentDay">
                <div className="Row">
                    <h3>{getDayName(new Date())}</h3>
                    <p>{params.data.currentConditions.datetime}</p>
                    <img alt="weather" src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${params.data.currentConditions.icon}.svg`}/>
                    
                    <p>{params.data.currentConditions.conditions}</p>
                </div>
                
                <p>temperature - {params.data.currentConditions.temp}°</p>
            </div>
        </div>
        
        <div className="nextDays">
            {
                params.data.days.map((item, index) => 
                
                <>
                    <div className={`item ${index===0?"first":""}`}>
                        <h3>{getDayName(new Date(item.datetime))}</h3>
                        <img alt="weather" src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${item.icon}.png`}/>
                        
                        {/* <p>{item.conditions}</p> */}
                        <p>{item.temp}°</p>
                    </div>
                </>
                )
            }
            
        </div>
        
        </>
            
        
        
    )
}

export default WeatherInfo;
