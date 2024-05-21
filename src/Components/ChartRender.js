import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';
import LineChart from '../Charts/LineChart';
import DonutChart from '../Charts/DonutChart';
import HistogramChart from '../Charts/Histograph';
import SplineChart from '../Charts/SplineLineChart';
import AreaChart from '../Charts/AreaChart';
import GaugeMeter from '../Charts/GuageMeter';

const ChartRender = ({ chartData }) => {
// Render the appropriate chart based on the URL parameter
switch (window.location.pathname) {
      case "/bar-chart":
        return <BarChart data={chartData} />;
      case "/pie-chart":
        return <PieChart data={chartData} />;
      case "/line-chart":
        return <LineChart data={chartData} />;
      case "/donut-chart":
        return <DonutChart data={chartData} />;
      case "/histograph-chart":
        return <HistogramChart data={chartData} />;
      case "/spline-line-chart":
        return <SplineChart data={chartData} />;
      case "/area-bar-chart":
        return <AreaChart data={chartData} />;
      case "/guage-meter-chart":
        return <GaugeMeter data={chartData} />;
      default:
        return null;
      }
  }
export default ChartRender;