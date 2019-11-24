import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {fetchData, fetchDataLoading, fetchDataFailure} from '../../actions';
import { rootURL } from '../../constants';

class TripResults extends React.Component {
    componentDidMount() {
        this.props.fetchData(rootURL)
    }
    
    render() {
   
    const { holidays,itemLoading } = this.props
    
    const display =  holidays.map(function(item, i){
            return <li key={i}>{item.title}</li>
          })

        if(!holidays.length || itemLoading) {
            return <p> Loading......</p>
        }
        return (
            <div>
                <ul>
                    {display}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        holidays: state.holidays,
        itemLoading: state.itemLoading,
        itemLoadingError: state.itemLoadingError
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchData,
        fetchDataLoading,
        fetchDataFailure
    },
    dispatch
)

export default connect(mapStateToProps,mapDispatchToProps)(TripResults);