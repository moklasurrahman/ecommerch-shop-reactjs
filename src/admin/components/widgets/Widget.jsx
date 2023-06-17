import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';



const Widget = ({type}) => {
    let data;

    //temporary
    const amount = 100;
    const parsen = 20;
    switch(type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all Users",
                icon: <PermIdentityOutlinedIcon className="leftBottomicon" style={{backgroundColor: "rgba(240, 128, 128, 0.221)",  color: "rgba(240, 128, 128)"}}/>
            };
            break;
            case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="leftBottomicon" style={{backgroundColor: "rgba(218, 165, 32, 0.221)",  color: "goldenrod"}}/>
            };
            break;
            case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "See all Users",
                icon: <MonetizationOnOutlinedIcon className="leftBottomicon" style={{backgroundColor: "rgba(0, 128, 0, 0.221)",  color: "green"}}/>
            };
            break;
            case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See all Balance",
                icon: <AccountBalanceWalletOutlinedIcon className="leftBottomicon" style={{backgroundColor: "rgba(128, 0, 128, 0.221)",  color: "purple"}}/>
            };
            break;
            default:
                break;
    }

  return (
    <div className="widget">
        <div className="left">
            
                <span className="title">{data.title}</span>
                <span className="count">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {parsen} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget