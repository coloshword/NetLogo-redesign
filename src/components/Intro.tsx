import { IntroAnimation } from "./IntroAnimation";
import { Button } from "./Button";
import "./componentCSS/Intro.css";

const Intro = ({}) => {
    return (
        <div className="intro">
            <div className="intro-title-text-cont">
            	<div className="intro-title">
                	<pre>
	Understanding Complex Systems with{'\n'}
			Agent-Based Modeling
                	</pre>
            	</div>
            	<div className="intro-text">
                	<p>Agent-based modeling (ABM) is a powerful tool for understanding complex systems in which large-scale patterns emerge from the{'\n'}interactions of many simple parts. NetLogo is an ABM environment with a "low threshold" for learning yet "high ceiling" capabilities. This{'\n'} combination is why NetLogo is used widely both in educational settings and by professional scientists doing cutting edge research.</p>
            	</div>
            </div>
            <IntroAnimation/>
            <div className="intro-btn-cont">
                <Button
                colorClass="blue-button"
                padding="1rem 3rem"
                fontSize="1.125rem"
                text="GET NETLOGO"/> 
                <Button
                colorClass="light-button"
                padding="1rem 3rem"
                fontSize="1.125rem"
                text="LEARN MORE"/>
            </div>
        </div>
    )
}

export { Intro }
