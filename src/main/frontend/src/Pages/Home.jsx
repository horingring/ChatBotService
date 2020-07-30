import React, {Component} from 'react';
class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    // //API 가져오는 함수
    // getApi = () => {
    //     axios.get("http://localhost:8080/api/login").then(res => {
    //         console.log(res);
    //         this.setState({message: res.data.message})
    //     }).catch(res => console.log(res))
    // }

    render() {
        return (
            <div> Main 페이지
                <p>이게 메인이다
                </p>
            </div>

        )
    }
}

export default Home;