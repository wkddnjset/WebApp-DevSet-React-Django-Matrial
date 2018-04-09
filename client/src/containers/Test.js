import React, {Component} from 'react';
import Test from '../components/Test';
import * as service from '../services/getTest';


class PostContainer extends Component {

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    fetchPostInfo = async () => {
        const info = await Promise.all([
            service.getTest()
        ]);
        
        console.log(info);
    }    

    render() {
        return (
            <p>00</p>
        );
    }
}

export default PostContainer;