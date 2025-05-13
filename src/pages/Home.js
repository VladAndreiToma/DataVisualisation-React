import VerticalMenu from "../menus/VerticalMenu";

export default function Home() {
    return (
        <div className="page-container">
            <VerticalMenu />
            <div className="generic-page-container">
                <p style={{ fontWeight: "bold", fontSize: '4vw' }}>
                    Welcome to Visuals-io<br />
                    It aims to show you the usage of the Victory library to build
                    good-looking statistical UI graphics with a certain schema.
                </p>
                <p>
                    The elements are of multiple types and contain multiple features:<br />
                    Bar, Charts, Lines, Pies, Histograms and so on...<br />
                    Contains features like: color schemes, fill schemes, dynamic animations and data injection, scaling, labeling, and so on...
                </p>
                <div className="victory-contents-and-features">
                    <ul style={{ listStyleType: 'disc' }}>
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
                        <li>Color scheme palette</li>
                        <li>Animation scheme</li>
                        <li>Styling with custom schemes</li>
                        <li>Tooltips for data visualization</li>
                        <li>Rendering mechanics</li>
                        <li>Data labeling</li>
                        <li>Data injection</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
