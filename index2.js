import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    state = {
        likes: 100,
        liked: false
    }
    
    changeCount = e => {
        console.log(this.state)
        this.state.liked ? this.setState({ liked: false}) : this.setState({ liked: true});
        this.state.liked ? this.setState({ likes: this.state.likes-1}) : this.setState({ likes: this.state.likes+1});
    }
    
    render() {
        return (
            <>
                <div className={` like-button ${this.state.liked ? 'liked' : '' } `} onClick={this.changeCount}>
                    <h2>Like |&nbsp;
                        <span className='likes-counter'> {this.state.likes}</span>
                    </h2>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                        background-color: lightgrey;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}