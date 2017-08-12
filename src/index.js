import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';//在生产环境做本地缓存的东西

// 函数定义组件
// function Welcome(props){
//     return <h1>Hello,{props.id}</h1>;
// }
// const element = <Welcome name="zeze" id="zhou"/>;
// //Welcome是一个函数定义组件，name,id 都是这个函数的参数props的属性
// // const element = <Welcome name="World"/>;
//
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
// ReactDOM.render(<App />, document.getElementById('root'));
// 后一个render会覆盖前一个render


// class Welcome2 extends React.Component {
//     render() {
//         return <h1>Hello,{this.props.name}</h1>;
//     }
// }
//
// class App2 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Welcome2 name="1" />
//                 <Welcome2 name="2" />
//                 <Welcome2 name="3" />
//             </div>
//         );
//     }
// }
/*<Welcome2 name="test"/>,*/
// name属性在这里面传入
// ReactDOM.render(
//     <App2 />,
//     document.getElementById('root')
// );
// ************************************comment组件*****************************
//
// function formateDate(date){
//     return date.toLocaleDateString();
// }
//
// function Avatar(props){
//     return (
//         <img className="Avatar"
//              src={props.user.avatarUrl}
//              alt={props.user.name} />
//     )
// }
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author} />
//
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formateDate(props.date)}
//             </div>
//         </div>
//     );
// }
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React',
//     author: {
//     name: 'Avril Zhou',
//         avatarUrl: 'http://placekitten.com/g/64/64'
//     }
// };
// ReactDOM.render(
//     <Comment
//         date = {comment.date}
//         text = {comment.text}
//         author = {comment.author}
//     />,
//     document.getElementById('root')
// )

// *******************comment结束*****************************

// *****************用ES6封装函数**************************
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello,World</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// state
// function FormattedDate(props) {
//     return <h2>It is {props.date.toLocaleTimeString()}.</h2>
// }
//
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         // 调用父类的构造函数
//         this.state = {date: new Date()};
//         // 构造函数是唯一能初始化this.state的地方
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//     // 生命周期钩子
//     // 当组件输出到DOM后会执行componentDidMoun)钩子
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//                 date: new Date()
//             });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello,World</h1>
//                 {/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/}
//                 <FormattedDate date={this.state.date} />
//             </div>
//         );
//     }
// }
//
// function App1(){
//     return (
//         <div>
//             <Clock /><Clock /><Clock />
//         </div>
//     );
// }
//
//
//     ReactDOM.render(
//
//         <App1 />,
//         document.getElementById('root')
//     );


// setInterval(tick,1000);

// state结束

// *****************************toggle****************
// class Toggle extends React.Component {
//
//     constructor(props) {
//         super(props);
//         /*
//     注意: 在派生的类中, 在你可以使用'this'之前, 必须先调用super()。
//     忽略这, 这将导致引用错误。
// */
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//         // 使得this生效 类的方法默认是不会绑定this的 如果不绑定this的值会是undefined
//
//     }
//
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'NO' : 'OFF'}
//             </button>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );



//***************************************** 条件渲染***********************
/*class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}



function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl  />,
    document.getElementById('root')
);*/


// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//             <h2>
//                 You have {unreadMessages.length} unread messages.
//             </h2>}
//         </div>
//     );
// }
// /*js中true&&expression 总是返回expression
// false && 总是返回false*/
//
// const messages = ['react', 'Re: React', 'Re:Re: React'];
//
// // ReactDOM.render(
// //     <Mailbox unreadMessages={messages} />,
// //     document.getElementById('root')
// // );
//
// // 如果条件变得复杂可能就是提取组件的好时机
//
//
// // 阻止组件渲染
// function WarningBanner(props) {
//     if(!props.warn) {
//         return null;
//     }
//     return (
//         <div className="warning">Warning!你来打我呀</div>
//     );
// }
//
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showWarning: false}
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//     handleToggleClick() {
//         this.setState(prevState =>({
//             showWarning: !prevState.showWarning
//         }));
//     }
//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning}/>
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Page  />,
//     document.getElementById('root')
// );

// ***********************************列表&&keys

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
//     <li>{numbers}</li>
// );
//
// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// );

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>
//             {number}
//         </li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }
//
// const numbers = [9, 2, 3, 5, 'sfsfsdf'];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// )

// *************************key的正确使用方法
// key会作为給react的提示，但是不会传递給组件

/*function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}


const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);*/
// JSX允许在大括号中嵌入任何表达式
/*
function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number} />
            )}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
*/
// 表单
/*
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '提示'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    /!*
    Event 对象
    Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
    事件通常与函数结合使用，函数不会在事件发生前被执行！*!/
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);
*/
// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         };
//
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }
//
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//
//         this.setState({
//             [name]: value
//         });
//     }
//
//     render() {
//         return (
//             <form>
//                 <label>
//                     Is Going:
//                     <input
//                     name="isGoing"
//                     type="checkbox"
//                     checked={this.state.isGoing}
//                     onChange={this.handleInputChange}/>
//                 </label>
//
//                 <br/>
//
//                 <label>
//                     Number of guests:
//                     <input
//                         name="numberOfGuests"
//                         type="number"
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInputChange}/>
//                 </label>
//             </form>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Reservation/>,
//     document.getElementById('root')
// );


// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };
//
// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }
//
// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
//
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
//
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }
//
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//
//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }
//
//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
//
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }
//
//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }
//
//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }
//
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//
//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );



registerServiceWorker();
