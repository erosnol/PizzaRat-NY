//* ==== buttons
const manBtn = document.getElementById('manhattan')
const bxBtn = document.getElementById('bronx')
const bkBtn = document.getElementById('brooklyn')
const qnsBtn = document.getElementById('queens')
const stIslandBtn = document.getElementById('staten-island')

//* input 
const input = document.querySelector('input')

//*Container div
const container = document.getElementById('container')


//* fetch data from API
const getData = (e) => {
    const numComplaints = input.value || 10
    const borough = e.target.id.toUpperCase()
    //fetch
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${numComplaints}&agency=NYPD&borough=${borough}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderData(data)
        })
        .catch(err => console.error(err))
}



//* Data Render Function. Appending data away from first function 
const renderData = (data) => {
    data.map(item => {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const resToggleBtn = document.createElement('button')

        h4.textContent = item.descriptor
        resToggleBtn.innerHTML = "Police Response"

        h4.appendChild(p)
        div.appendChild(h4)
        container.appendChild(div)
        document.body.appendChild(resToggleBtn);


    })
}



      
        

//* Event Listeners
manBtn.addEventListener('click', getData)
bxBtn.addEventListener('click', getData)
bkBtn.addEventListener('click', getData)
qnsBtn.addEventListener('click', getData)
stIslandBtn.addEventListener('click', getData)


