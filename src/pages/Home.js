import VerticalMenu from "../menus/VerticalMenu";

export default function Home(){
    return(
        <div className="page-container">
            <VerticalMenu/>
            <div className="generic-page-container">
                    <p style={{ fontWeight: "bold" , fontSize: '46px' }}>
                        Welcome to Visuals-io<br/>
                        It aims to show you the usage of Victory library to build
                        good looking startistical ui graphics with certain schema.
                    </p>
                    <p>
                        The elements are of multiple tipes and contain multiple feature<br/>
                        Bar, Charts, Lines, Pies, Histogram and so on...<br/>
                        Containes features like: colorschemes, fillschemes, dynamic animations and data injection, scaling, labeling, so on...
                    </p>
                    <div className="victory-contents-and-features">
                        <ul style={{ listStyleType:'disc' }}>
                            <li>Bar visualisation</li>
                            <li>Box visualisation</li>
                            <li>Area visualisation</li>
                            <li>Error Bar visualisation</li>
                            <li>Candlestick visualisation</li>
                            <li>Histogram visualisation</li>
                            <li>Voronoi</li>
                            <li>Line Visualisation</li>
                            <li>Scatter visualisation</li>
                        </ul>
                        <ul>
                            <li>Color scheme pallete</li>
                            <li>Animation scheme</li>
                            <li>Styling with custom schemes</li>
                            <li>Tooltips for data vis</li>
                            <li>Rendering mechanics</li>
                            <li>Data labeling</li>
                            <li>Data injection</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}