import React ,{useState} from 'react' 


export default function Navbar(props) {
    const [color, setcolor] = useState('light')
    const [active, setactive] = useState('dark')


    const colorblack =()=>{
       setcolor('light')
       const button1= document.getElementById('button1')
       const button2= document.getElementById('button2')

       button1.classList.add('activee')
       button2.classList.remove('activee')
    }

    const colorwhite =()=>{
        setcolor('dark')
        const button1= document.getElementById('button1')
        const button2= document.getElementById('button2')
        button2.classList.add('activee')
        button1.classList.remove('activee')
    }
  return (
    <>
        <nav className={`navbar navbar-${color} navbar-expand-lg bg-${color}`} id='manu'>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.logo}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    </li>
                </ul>

                </div>
                <div className="right">
                <button className={`${active}`}  id= 'button1' onClick={colorblack}><i class="uil uil-sun"></i></button>
                <button className={`${active}`}  id= 'button12' onClick={colorwhite}><i class="uil uil-moon"></i></button>
                </div>
            </div>
            </nav>
    </>
  )
}
