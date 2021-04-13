import React from 'react';
import { connect } from 'react-redux';
import FetchLoader from '../components/FetchLoader/FetchLoader';
import { isFetchingToggle } from '../reducers/steps-reducer';

let mapStateToProps = (state) => {
    return {
        isFetching: state.stepsPage.isFetching,
    }
}

export const withFetchLoader = (Component) => {
    
    class FetchComponent extends React.Component {
        componentDidMount() {
            setTimeout(() => {
                this.props.isFetchingToggle(false);
            }, 1000);
        }

        render() {
            if(this.props.isFetching) {
                return <FetchLoader />
            }

            return <Component {...this.props}/>
        }
    }
    
    return connect(mapStateToProps, {
        isFetchingToggle,
    })(FetchComponent);
}