import React from "react";

export default function Foot(props) {
    let footerStyle = {
        backgroundColor: props.mode==='Light'?'#FFDBAA':'black',
        color : props.mode==='Light'?'black':'white'
    }
  return (
    <>
      <div className="developer" style = {footerStyle}>
            <div className="copyright">
                <p>Developed by Rakshit Gupta &nbsp;&nbsp;| &nbsp;&nbsp;Copyright &copy; 2024  &nbsp;&nbsp;| &nbsp;&nbsp;All Rights Reserved</p>
				{/* <p>Developed by Rakshit Gupta</p> */}
			</div>
			<div className="copyright">
				<div className="selfinfo">
					<a href="https://www.instagram.com/rakshitgupta2812/" >
					<abbr title="Instagram">
						<img alt = "no" className="selficon" style={{filter : props.mode==='Light'?'invert(100%)':'invert(0)'}} src ={require('./selfi.png')} width="20"/>
					</abbr>
				</a>
				<a href="https://www.linkedin.com/in/rakshit-gupta-3b59b822b/" >
					<abbr title="Linkedin">
						<img alt = "no" className="selficon" style={{filter : props.mode==='Light'?'invert(100%)':'invert(0)'}} src ={require('./selfl.png')} width="20"/>
					</abbr>
				</a>
				<a href="https://github.com/rakshit2812" >
					<abbr title="Github">
						<img alt = "no" className="selficon" style={{filter : props.mode==='Light'?'invert(100%)':'invert(0)'}} src ={require('./selfg.png')} width="25"/>
					</abbr>
				</a>
				</div>
        </div>
		{/* <div className="copyright">
			<article>Copyright &copy; 2022  &nbsp;&nbsp;| &nbsp;&nbsp; All Rights Reserved</article>
		</div> */}
		</div>    
    </>
  );
}
