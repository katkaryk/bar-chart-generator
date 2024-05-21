import { Link, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import BarChartFront from '../Pages/BarChartFront';
import AreaChartFront from '../Pages/AreaChartFront';
import VennDaigram from '../Charts/VennDaigramChart';
import BarChartImage from '../assets/Bar-chart-card.png';
import PieChartImage from '../assets/Pie-chart-card.png';
import LineChartImage from '../assets/Line-graph-chart.png';
import DonutChartImage from '../assets/Donut-graph-chart.png';
import HistographImage from '../assets/Histograph-chart.png';
import AreaBarChartImage from '../assets/Area-bar-chart.png';
import GuageMeterImage from '../assets/Guage-meter.png';
import '../Styles/Home.css';
const Home = () => {
  return (
    <div>
      <div className='main-card-container'>
        <div><Link to={{ pathname: "/bar-chart", state: { myState: 'Bar-Chart' } }}> <img src={BarChartImage} alt="Bar Chart" className='main-chart-card mr-5'/></Link></div>
        <div><Link to={{ pathname: "/pie-chart", state: { myState: 'Pie-Chart' } }}><img src={PieChartImage} alt="Pie Chart" className='main-chart-card'/></Link></div>
        <div><Link to={{ pathname: "/line-chart", state: { myState: 'Line-Chart' } }}><img src={LineChartImage} alt="Line Chart" className='main-chart-card' /></Link></div>
        <div><Link to={{ pathname: "/donut-chart", state: { myState: 'Donut-Chart' } }}><img src={DonutChartImage} alt="Donut Chart" className='main-chart-card'/></Link></div>
        <div><Link to={{ pathname: "/histograph-chart", state: { myState: 'histograph-Chart' } }}><img src={HistographImage} alt="Histograph Chart" className='main-chart-card'/></Link></div>
        <div><Link to={{ pathname: "/area-bar-chart", state: { myState: 'area-Chart' } }}><img src={AreaBarChartImage} alt="Area bar Chart" className='main-chart-card'/></Link></div>
        <div><Link to={{ pathname: "/guage-meter-chart", state: { myState: 'guage-meter-Chart' } }}><img src={GuageMeterImage} alt="Guage meter" className='main-chart-card'/></Link></div>
      </div>
      <hr />
      <Routes>
        <Route exact path="/bar-chart" element={<BarChartFront />} />
        <Route exact path="/pie-chart" element={<BarChartFront />} />
        <Route exact path="/line-chart" element={<BarChartFront />} />
        <Route exact path="/donut-chart" element={<BarChartFront />} />
        <Route exact path="/histograph-chart" element={<BarChartFront />} />
        <Route exact path="/venn-daigram-chart" element={<VennDaigram />} />
        <Route exact path="/spline-line-chart" element={<BarChartFront />} />
        <Route exact path="/area-bar-chart" element={<AreaChartFront/>} />
        <Route exact path="/guage-meter-chart" element={<BarChartFront/>} />
      </Routes>
    </div>
  );
}

export default Home;
