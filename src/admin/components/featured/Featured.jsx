import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Featured = () => {
  return (
    <div className="featured">
      <div className="title">
        <span>Total Revenue</span>
        <span><MoreVertOutlinedIcon className="icon"/></span>
      </div>
      <div className="bottom">
      <div className="featuredChart">
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5}/>
      </div>
      <p className="bartitle">Total sales made today</p>
      <p className="count">$420</p>
      <p className="disc">Prvious transactions processing. Last payments may not be included.</p>
    
    <div className="summery">
      <div className="item">
        <div className="itemTitle">Target</div>
        <div className="itemResult positive">
           <KeyboardArrowUpIcon/>
          <div className="resultAmount">$12.4k</div>
        </div>
      </div>

      <div className="item">
        <div className="itemTitle">Last Week</div>
        <div className="itemResult negative">
           <KeyboardArrowDownIcon/>
          <div className="resultAmount">$12.4k</div>
        </div>
      </div>

      <div className="item">
        <div className="itemTitle">Last Month</div>
        <div className="itemResult positive">
           <KeyboardArrowUpIcon/>
          <div className="resultAmount">$12.4k</div>
        </div>
      </div>


    </div>
    
    </div>

    </div>
  )
}

export default Featured