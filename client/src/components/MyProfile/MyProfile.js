import React, {Component} from 'react';
import {useMyProfileHooks} from './myProfileHooks';
//import {hobby} from '../RegisterProfile/dictionary';


export function MyProfile () {

    
const {data, hobbys, age, findMatch} = useMyProfileHooks()

    return (
        <div className="myProfile">
            <div className="mainPicture">
                
            </div>
            <div className="statusNickname">
                <div className="nickname">
                    {data?.nickname}
                </div>
                <div className="status">
                    <img src={'/' + data?.relationship + '.png'} className="statusImg"></img>
                </div>
            </div>
            <div className="interests">               
                <div className="city">{data?.city}</div>
                <div className="age">{age}</div>
                <div className="hobbys">{hobbys.join(', ')}</div>
            </div>
            <div className="myPage">
                
            </div>
            <button className="findMatch" onClick={findMatch}>
                Znajdź rozmówcę
            </button>
        </div>
    );   
}

/*class MyProfile extends Component {
    state = {data: null, error: null, accountData: null, hobbys: [], age: 0}
    componentDidMount(){
        fetch('/api/user')
                .then(response => response.json())
                .then(data => {
                    this.setState({accountData: data, error: null})
                })
                .catch(error => {
                    this.setState({accountData: null, error})
                    console.error(error);
                })
        fetch('/api/user/details')
                .then(response => response.json())
                .then(data => {
                    this.setState({data, error: null})
                })
                .catch(error => {
                    this.setState({data: null, error})
                    console.error(error);
                })
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.data !== prevState.data){
            const chosenHobbys = this.state.data?.interests.split(',');
            const hobbys = hobby.filter((element) => chosenHobbys.includes(element.id.toString())).map(el => el?.label)
            this.setState({hobbys})
        }
        if(this.state.accountData !== prevState.accountData){
            const now = new Date();
            const birthDate = new Date(this.state.accountData.birth_date)
            this.setState({age: now.getFullYear() - birthDate.getFullYear()})
        }
    }
    render() {
        return (
            <div className="myProfile">
            <div className="mainPicture">
                
            </div>
            <div className="statusNickname">
                <div className="nickname">
                    {this.state.data?.nickname}
                </div>
                <div className="status">
                    <img src={'/' + this.state.data?.relationship + '.png'} className="statusImg"></img>
                </div>
            </div>
            <div className="interests">               
                <div className="city">{this.state.data?.city}</div>
                <div className="age">{this.state.age}</div>
                <div className="hobbys">{this.state.hobbys.join(', ')}</div>
            </div>
            <div className="myPage">
                
            </div>
            <button className="findMatch">
                Znajdź rozmówcę
            </button>
        </div>
        )
    }
}*/

export default MyProfile;



